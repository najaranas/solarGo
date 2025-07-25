import React from "react";
import "./Section1.css";

export default function Section1() {
  return (
    <section className="about-section-1 section">
      <div className="container flex-center g-50">
        <div className="content flex-column-start g-20">
          <h4>Le cœur de Solar GO</h4>
          <p>
            La famille est au cœur de la raison pour laquelle Gilsomar Matos a
            décidé de créer Solar GO. Après avoir travaillé pendant 3 ans dans
            une autre entreprise, il a choisi de se lancer seul et de fonder une
            société qui reflète vraiment ses valeurs. Lui et sa femme ont
            récemment accueilli leur premier enfant, et il souhaite bâtir une
            entreprise dont sa famille pourra être fière – un héritage à
            transmettre.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
          alt="Famille heureuse devant leur maison avec panneaux solaires"
          loading="async"
        />
      </div>
    </section>
  );
}
