// /api/checkout/create-checkout-session.js

import Stripe from "stripe";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const connectToDB = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
};

const User = mongoose.models.User || mongoose.model("User", new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  stripeCustomerId: { type: String, unique: true },
}));

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const { email, priceId, productName } = req.body;

  if (!email || !priceId || !productName) {
    return res.status(400).json({ error: "Champs requis manquants" });
  }

  try {
    await connectToDB();
    let user = await User.findOne({ email });

    if (!user) {
      const customer = await stripe.customers.create({ email });
      user = await User.create({ email, stripeCustomerId: customer.id });
    }

    const price = await stripe.prices.retrieve(priceId);
    const product = await stripe.products.retrieve(price.product);

    const session = await stripe.checkout.sessions.create({
      customer: user.stripeCustomerId,
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [{
        price_data: {
          currency: "eur",
          product_data: {
            name: product.name,
            description: product.description,
            images: ["https://i.postimg.cc/fT1bQF7s/support-informatique.png"],
          },
          unit_amount: price.unit_amount,
        },
        quantity: 1,
      }],
      success_url: "https://www.axelfrancois.fr/success.html",
      cancel_url: "https://www.axelfrancois.fr/cancel.html",
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("❌ Erreur Stripe :", error.message);
    res.status(500).json({ error: "Erreur serveur Stripe" });
  }
}
