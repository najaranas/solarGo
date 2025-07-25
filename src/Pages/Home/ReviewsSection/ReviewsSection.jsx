import React from "react";
import "./ReviewsSection.css";
import { Link } from "react-router-dom";
import ReviewCard from "../../../Components/Reviewcard/Reviewcard";

const reviewData = {
  name: "Ali. P",
  paragraph:
    "Ma femme et moi sommes très satisfaits du remplacement de notre toit. Merci à l'équipe pour leur excellent travail.",
  imgSrc:
    "https://th.bing.com/th/id/OIP.xLgSfiPI8kldpAdWxFL3NwHaGU?rs=1&pid=ImgDetMain",
};

export default function ReviewsSection() {
  return (
    <section className="reviews-section section">
      <div className="container flex-center g-100">
        <div className="content flex-column-start g-15">
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
        <div className="review-box">
          <ReviewCard data={reviewData} />
        </div>
      </div>
    </section>
  );
}
