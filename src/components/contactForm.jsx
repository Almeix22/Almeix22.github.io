import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    commentaire: "",
  });

  const [errors, setErrors] = useState({
    nom: false,
    email: false,
    commentaire: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validation simple
    if (value.trim() === "") {
      setErrors((prev) => ({ ...prev, [name]: true }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérification si tous les champs sont remplis
    if (Object.values(errors).includes(true) || Object.values(formData).includes("")) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    try {
      await emailjs.sendForm(
        "service_87wxahh",
        "React_contact_form",
        e.target,
        "5nHyDxu-eGXTRR0Wb"
      );
      alert("E-mail envoyé avec succès !");
      setFormData({ nom: "", email: "", commentaire: "" });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail :", error);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3 className="form-title">Un petit message pour en savoir plus ?</h3>
      
      <div className="form-input-container">
        <input
          type="text"
          name="nom"
          placeholder="Nom / Prénom"
          value={formData.nom}
          onChange={handleChange}
          required
          className={errors.nom ? "input-error" : ""}
        />
        {errors.nom && <span className="error-message">Le nom est requis</span>}
      </div>

      <div className="form-input-container">
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <span className="error-message">L'e-mail est requis</span>}
      </div>

      <div className="form-input-container">
        <textarea
          name="commentaire"
          placeholder="Merci de détailler votre besoin"
          value={formData.commentaire}
          onChange={handleChange}
          required
          rows="8"
          className={errors.commentaire ? "input-error" : ""}
        />
        {errors.commentaire && <span className="error-message">Le commentaire est requis</span>}
      </div>

      <button type="submit" className="submit-button">Envoyer</button>
    </form>
  );
}

export default ContactForm;
