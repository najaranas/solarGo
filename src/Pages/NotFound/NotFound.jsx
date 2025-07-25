import React from "react";

import Layout from "../../Components/Layouts/Layout";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import "./NotFound.css";

export default function NotFound() {
  return (
    <Layout>
      <HeroBanner subTitle="Erreur" mainTitle="Page non trouvée" />
      <section className="notfound-section container flex-column-center g-40">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">
          Oups ! La page que vous cherchez n'existe pas.
        </p>
        <a href="/" className="notfound-btn">
          Retour à l'accueil
        </a>
      </section>
    </Layout>
  );
}
