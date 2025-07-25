import React from "react";
import "./Section2.css";
import ReviewCard from "../../../Components/Reviewcard/Reviewcard";
import { Link } from "react-router-dom";

const reviewData = [
  {
    name: "Michel Dupont",
    paragraph:
      "Service rapide et équipe très professionnelle. Je recommande vivement Solar GO pour toute installation solaire !",
    imgSrc: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Jean Martin",
    paragraph:
      "Très satisfait du résultat, l'équipe a su répondre à toutes mes attentes. Merci pour votre accompagnement professionnel !",
    imgSrc: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

export default function Section2() {
  return (
    <section className="contact-section-2 section">
      <div className="container">
        <div className="content flex-column-center g-30">
          <h3>Notre avis 5 étoiles</h3>
          <p>
            Nos anciens clients ont souligné notre excellente communication,
            notre professionnalisme et nos garanties comme quelques-unes des
            raisons pour lesquelles il est agréable de travailler avec Euro
            Solar. Jetez un œil à nos avis par vous-même&nbsp;!
          </p>
          <Link to={"/avis"} className="link flex-center g-5">
            <span>Tous Les Avis</span>
            <i className="fa-solid fa-caret-right " />
          </Link>
        </div>
        <div className="review-box flex g-50">
          {reviewData.map((item, index) => {
            return <ReviewCard key={index} data={item} />;
          })}
        </div>
      </div>
    </section>
  );
}
