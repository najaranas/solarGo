import React from "react";
import "./ServiceSection.css";
import { Link } from "react-router-dom";
import Servicecard from "../../../Components/Servicecard/Servicecard";

const data = [
  {
    serviceCardName: "Installation Photovoltaïque",
    serviceCardDescription:
      "Profitez d'une installation de panneaux solaires de haute qualité, optimisée pour maximiser votre production d'énergie renouvelable.",
    // imgSrc: "/assets/fotis-fotopoulos-LJ9KY8pIH3E-unsplash (1).jpg",
    imgSrc:
      "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=600",
    imgAlt: "",
  },
  {
    serviceCardName: "Installation Pompage Solaire",
    serviceCardDescription:
      "Assurez un approvisionnement en eau fiable et écologique grâce à nos solutions de pompage alimentées par l'énergie solaire.",
    imgSrc:
      // "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/318550005_118131444459377_184972837661106223_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=b7aIkn6Yy54Q7kNvgGVHwIs&_nc_ht=scontent.ftun16-1.fna&oh=00_AYCvkAbbuv8ygPfAwXG7ctMKYcHeg1sueaJDXnKiwD9Evg&oe=66E53E8D",
      "https://images.pexels.com/photos/14209079/pexels-photo-14209079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imgAlt: "",
  },
];

export default function ServiceSection() {
  return (
    <section className="service-section section">
      <div className="container flex-column-center g-30">
        <h3>Nos Meilleurs Services</h3>
        <div className="service-box flex-center g-30">
          {data.map((item, index) => {
            return <Servicecard key={index} data={item} />;
          })}
        </div>
        <Link to={"/services"} className="primary-btn flex-center g-10">
          <span>Tous Les Services</span>
          <i className="fa-solid fa-caret-right " />
        </Link>
      </div>
    </section>
  );
}
