import React from "react";
import Layout from "../../Components/Layouts/Layout";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import { Link } from "react-router-dom";
import "./Merci.css";

export default function Merci() {
  return (
    <Layout>
      <HeroBanner
        subTitle="Confirmation"
        mainTitle="Merci pour votre message !"
      />
      <section className="merci-section container flex-column-center g-40">
        <h1 className="merci-title">Merci !</h1>
        <p className="merci-message">
          Votre message a bien été envoyé.
          <br />
          Nous vous répondrons dans les plus brefs délais.
        </p>
        <Link to="/" className="merci-btn">
          Retour à l'accueil
        </Link>
      </section>
    </Layout>
  );
}
