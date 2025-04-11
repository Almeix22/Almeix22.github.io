// /api/stripe/webhook.js

import Stripe from "stripe";
import dotenv from "dotenv";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false, // 🔥 Désactive bodyParser pour Stripe
  },
};

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const buffer = async (readable) => {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
};

const connectToDB = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const User = mongoose.models.User || mongoose.model("User", new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  stripeCustomerId: { type: String, unique: true },
}));

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Méthode non autorisée");
  }

  const buf = await buffer(req);
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("❌ Signature invalide :", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    try {
      await connectToDB();

      const session = event.data.object;
      const customer = await stripe.customers.retrieve(session.customer);
      const userEmail = customer.email;

      const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
      const product = lineItems.data[0];
      const productName = product.description || "Produit inconnu";
      const price = (session.amount_total / 100).toFixed(2) + "€";

      const emailContent = `
        <h2>Merci pour votre achat !</h2>
        <p>Nous avons bien reçu votre paiement.</p>
        <h3>Détails de votre commande :</h3>
        <ul>
          <li><strong>Produit :</strong> ${productName}</li>
          <li><strong>Prix :</strong> ${price}</li>
          <li><strong>Date :</strong> ${new Date().toLocaleDateString()}</li>
        </ul>
        <p>Votre abonnement est désormais actif.</p>
        <p>Si vous avez des questions, n'hésitez pas à nous contacter.</p>
        <p>Merci de votre confiance !</p>
      `;

      await transporter.sendMail({
        from: `Mon Service <${process.env.SMTP_USER}>`,
        to: userEmail,
        subject: "🎉 Confirmation de votre abonnement",
        html: emailContent,
      });

      // Email admin
      const adminContent = `
        <h2>Nouvel abonnement</h2>
        <p>Un nouvel abonnement a été souscrit.</p>
        <ul>
          <li><strong>Client :</strong> ${userEmail}</li>
          <li><strong>Produit :</strong> ${productName}</li>
          <li><strong>Prix :</strong> ${price}</li>
          <li><strong>Date :</strong> ${new Date().toLocaleDateString()}</li>
        </ul>
      `;

      await transporter.sendMail({
        from: `Mon Service <${process.env.SMTP_USER}>`,
        to: process.env.ADMIN_EMAIL,
        subject: "🛍️ Nouvel abonnement souscrit",
        html: adminContent,
      });

      console.log("📩 Emails envoyés");
    } catch (err) {
      console.error("❌ Erreur dans le webhook :", err.message);
      return res.status(500).send(`Erreur webhook : ${err.message}`);
    }
  }

  res.status(200).json({ received: true });
}
