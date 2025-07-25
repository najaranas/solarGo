import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className={"hero-section first-section"}>
      <div className="container flex-between-center g-20">
        <div className="content flex-column-start g-20 ">
          <h1>
            Économisez et Gagnez en Choisissant
            <span className="accent"> l’Énergie Solaire&nbsp;!</span>
          </h1>
          <p>
            Transformez votre maison en un modèle d’efficacité énergétique. En
            passant à l’énergie solaire, vous pouvez drastiquement réduire vos
            factures, augmenter la valeur de votre propriété, et prendre le
            contrôle de votre indépendance énergétique tout en jouant un rôle
            clé dans la protection de notre planète. Faites le premier pas vers
            un avenir plus lumineux et durable.
          </p>
        </div>
        <img alt="" decoding="async" src={"/assets/test.png"} />
      </div>
    </section>
  );
}
