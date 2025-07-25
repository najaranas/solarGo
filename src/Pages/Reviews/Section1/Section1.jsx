import React from "react";
import "./Section1.css";
import ReviewCard from "../../../Components/Reviewcard/Reviewcard";

const reviewsData = [
  {
    name: "Michel Dupont",
    paragraph:
      "Ma femme et moi sommes très satisfaits de notre nouvelle installation solaire. Merci à toute l'équipe pour leur professionnalisme et leur efficacité !",
    imgSrc: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophie Bernard",
    paragraph:
      "L'équipe a fait un excellent travail. Les délais ont été respectés et la qualité est au rendez-vous !",
    imgSrc: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Jean Martin",
    paragraph:
      "Expérience incroyable du début à la fin. Je recommande vivement leurs services !",
    imgSrc: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Olivia Garcia",
    paragraph:
      "Professionnels, fiables et abordables. Je suis ravie du résultat !",
    imgSrc: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    name: "Liam Dubois",
    paragraph:
      "Service de qualité, personnel sympathique et travail soigné. Je suis très satisfait de mon installation solaire.",
    imgSrc: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    name: "Émilie Durand",
    paragraph:
      "Ils ont dépassé mes attentes pour s'assurer que tout soit parfait. Je recommande sans hésiter !",
    imgSrc: "https://randomuser.me/api/portraits/men/37.jpg",
  },
  {
    name: "William Morel",
    paragraph:
      "Je suis très content du travail réalisé. L'équipe était professionnelle et efficace.",
    imgSrc: "https://randomuser.me/api/portraits/men/38.jpg",
  },
  {
    name: "Ava Lefevre",
    paragraph:
      "Service client excellent et travail remarquable. J'adore ma nouvelle installation !",
    imgSrc: "https://randomuser.me/api/portraits/men/39.jpg",
  },
  {
    name: "Noah Petit",
    paragraph:
      "Le projet a été terminé dans les temps et le budget respecté. Très satisfait !",
    imgSrc: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    name: "Charlotte Laurent",
    paragraph:
      "J'ai eu une excellente expérience avec cette entreprise. Le résultat est fantastique !",
    imgSrc: "https://randomuser.me/api/portraits/men/41.jpg",
  },
];

export default function Section1() {
  return (
    <div className="reviews-section-1 section">
      <div className="container">
        {reviewsData.map((item, index) => {
          return <ReviewCard key={index} data={item} />;
        })}
      </div>
    </div>
  );
}
