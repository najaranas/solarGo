import React from "react";
import "./ProcessSection.css";
import Process from "../Process/Process";

const data = [
  {
    miniTitle: "01 Service clé en main sans tracas",
    title: "Service clé en main sans tracas",
    paragraph:
      "Profitez d’un service complet et sans soucis. Solar GOs'occupe de tout, de la conception au financement, en passant par les autorisations et l'installation. Il vous suffit de fournir votre facture d'électricité et de signer.",
    imgSrc:
      "https://lirp.cdn-website.com/61355236/dms3rep/multi/opt/solar+panel+repair+technician+near+me-1920w.jpg", // Replace with actual image path
    imgAlt: "Installation solaire en cours",
  },
  {
    miniTitle: "02 Design moderne et personnalisé",
    title: "Design moderne et personnalisé",
    paragraph:
      "Optez pour un design élégant et moderne, parfaitement adapté à votre maison. Nos panneaux noirs sont disposés de manière soignée pour offrir un système à la fois puissant, fiable, et esthétiquement plaisant.",
    imgSrc:
      "https://images.pexels.com/photos/9800008/pexels-photo-9800008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image path
    imgAlt: "Panneaux solaires noirs bien organisés",
  },
  {
    miniTitle: "03 Soutien client complet",
    title: "Soutien client complet avant, pendant et après l’installation",
    paragraph:
      "Chez Solar GO, vous bénéficiez d’un accompagnement dédié avec un coordinateur de projet, des suivis hebdomadaires, et une assistance rapide par téléphone, email, et chat en direct.",
    imgSrc:
      "https://www.jnadealerprogram.com/blog/wp-content/uploads/2023/10/solar-panels-salesman.jpg", // Replace with actual image path
    imgAlt: "Support client par téléphone et chat",
  },
  {
    miniTitle: "04 Maintenance proactive",
    title: "Maintenance proactive pour une performance optimale",
    paragraph:
      "Nous assurons un suivi régulier de votre installation solaire pour garantir sa longévité et son efficacité. Avec Solar GO, vous avez l'assurance d'une performance durable.",
    imgSrc:
      "https://slightwave.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-02-at-11.01.34-PM.jpeg", // Replace with actual image path
    imgAlt: "Technicien vérifiant une installation solaire",
  },
];

export default function ProcessSection() {
  return (
    <section className="process-section section">
      <div className="container flex-column-center">
        <h3>Notre Processus</h3>
        <h4>En savoir plus sur notre processus de traitement de confiance</h4>
        <div className="process-box">
          {data.map((item, index) => {
            return <Process key={index} data={item} />;
          })}
        </div>
      </div>
    </section>
  );
}
