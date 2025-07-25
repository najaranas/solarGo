import { Route, Routes } from "react-router";
import "./styles/utility.css";
import "./styles/app.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Projects from "./Pages/Projects/Projects";
import Faq from "./Pages/Faq/Faq";
import Reviews from "./Pages/Reviews/Reviews";
import ServiceType from "./Pages/ServiceType/ServiceType.";

import React from "react";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";
import Merci from "./Pages/Merci/Merci";

const servicesData = [
  {
    path: "installation-solaire",
    section1: {
      title: "Installateurs de panneaux solaires en Tunisie",
      subtitle: "Valorisez votre maison grâce à l'énergie solaire",
      description: `Nous savons que l'extérieur de votre maison est tout aussi important que l'intérieur. C'est pourquoi nous proposons des services professionnels d'installation de panneaux photovoltaïques. Notre objectif ? Améliorer l'efficacité énergétique de votre propriété tout en lui offrant une protection durable contre les intempéries. Notre équipe prend le temps de comprendre vos besoins pour vous proposer des solutions solaires sur mesure qui vous satisferont pleinement.`,
      features: [
        {
          text: "Étude et dimensionnement personnalisés",
          icon: "https://homefrontexteriorsmn.com/wp-content/uploads/2024/03/square-bullets-red.svg",
        },
        {
          text: "Installation professionnelle et rapide",
          icon: "https://homefrontexteriorsmn.com/wp-content/uploads/2024/03/square-bullets-red.svg",
        },
        {
          text: "Matériel certifié et garantie",
          icon: "https://homefrontexteriorsmn.com/wp-content/uploads/2024/03/square-bullets-red.svg",
        },
      ],
      social: [
        {
          text: "Avis Google certifiés",
          icon: "https://homefrontexteriorsmn.com/wp-content/uploads/2024/03/google-g-logo.svg",
        },
        {
          text: "Communauté Facebook",
          icon: "https://homefrontexteriorsmn.com/wp-content/uploads/2024/03/facevook-f-logo.svg",
        },
        {
          text: "Clients satisfaits",
          icon: "https://mlg2i1jqo1iw.i.optimole.com/w:auto/h:auto/q:mauto/ig:avif/https://homefrontexteriorsmn.com/wp-content/themes/home-front-exteriors/inc/img/neighbor-trust-photos.png",
        },
      ],
    },
    section2: {
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1682148024043-79f4f7bfc84d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvbGFyJTIwbWFpbnRlbmFuY2V8ZW58MHx8MHx8fDA%3D%3D",
      title: "Le cœur de Solar GO",
      description: `La famille est au cœur de la raison pour laquelle Gilsomar Matos a décidé de créer Solar GO. Après avoir travaillé pendant 3 ans dans une autre entreprise, il a décidé de se lancer seul et de créer une société qui reflète vraiment ses valeurs. Lui et sa femme ont récemment accueilli leur premier enfant, et il souhaite bâtir une entreprise dont sa famille pourra être fière – un héritage à transmettre.`,
    },
    section3: {
      title: "Nos valeurs fondamentales",
      description: `Chaque projet chez Solar GO est guidé par nos valeurs fondamentales. Nous nous engageons à vous accompagner à chaque étape, de votre premier appel jusqu'au nettoyage final. Grâce à notre service personnalisé, vous bénéficiez d'un interlocuteur unique du début à la fin.`,
      valueBoxData: [
        {
          imgSrc:
            "https://theroofingtitan.com/wp-content/uploads/2024/01/icon-blue-hat.svg",
          altText: "Sécurité",
          title: "Sécurité",
          description:
            "Tous nos employés travaillent selon les normes de sécurité les plus strictes.",
        },
        {
          imgSrc:
            "https://theroofingtitan.com/wp-content/uploads/2024/01/icon-blue-check.svg",
          altText: "Qualité",
          title: "Qualité",
          description:
            "Nous sommes fiers de n'utiliser que des matériaux certifiés et de garantir un travail soigné.",
        },
        {
          imgSrc:
            "https://theroofingtitan.com/wp-content/uploads/2024/01/icon-blue-chat.svg",
          altText: "Accompagnement",
          title: "Accompagnement",
          description:
            "Nous prenons soin de votre maison comme si c'était la nôtre et veillons à votre satisfaction tout au long du projet.",
        },
        {
          imgSrc:
            "https://theroofingtitan.com/wp-content/uploads/2024/01/icon-blue-eye.svg",
          altText: "Transparence",
          title: "Transparence",
          description:
            "Nous sommes toujours honnêtes et transparents avec nos clients et nos équipes.",
        },
        {
          imgSrc:
            "https://theroofingtitan.com/wp-content/uploads/2024/01/icon-blue-hi5.svg",
          altText: "Confiance",
          title: "Confiance",
          description:
            "Construire des relations durables basées sur la confiance est notre priorité.",
        },
      ],
    },
    section4: {
      title: "Le cœur de Solar GO",
      description: `La famille est au cœur de la raison pour laquelle Gilsomar Matos a décidé de créer Solar GO. Après avoir travaillé pendant 3 ans dans une autre entreprise, il a décidé de se lancer seul et de créer une société qui reflète vraiment ses valeurs. Lui et sa femme ont récemment accueilli leur premier enfant, et il souhaite bâtir une entreprise dont sa famille pourra être fière – un héritage à transmettre.`,
      button: {
        text: "Devis Gratuit",
        iconClass: "fa-solid fa-caret-right",
        link: "/contact",
      },
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1682148205811-e8a8ce759f4b?q=80&w=953&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    section5: {
      title: "Nos installations solaires récentes",
      projects: [
        {
          imgSrc:
            "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=600",
          altText: "Installation solaire Pexels 1",
          id: 0,
        },
        {
          imgSrc:
            "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=600",
          altText: "Installation solaire Pexels 2",
          id: 1,
        },
        {
          imgSrc:
            "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=600",
          altText: "Installation solaire Pexels 3",
          id: 2,
        },
        {
          imgSrc:
            "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=600",
          altText: "Installation solaire Pexels 4",
          id: 3,
        },
      ],
    },
  },
  {
    path: "installation-pompage-solaire",
    section1: {
      title: "Installation de pompage solaire en Tunisie",
      subtitle: "L'eau grâce à l'énergie du soleil",
      description: `Nos solutions de pompage solaire assurent un approvisionnement en eau fiable, économique et respectueux de l'environnement. Idéal pour l'agriculture, l'irrigation ou l'usage domestique, notre équipe vous accompagne de l'étude à la mise en service, avec des équipements performants et adaptés à vos besoins.`,
      features: [
        {
          text: "Étude personnalisée du site",
          icon: "https://homefrontexteriorsmn.com/wp-content/uploads/2024/03/square-bullets-red.svg",
        },
        {
          text: "Installation de pompes solaires de haute qualité",
          icon: "https://homefrontexteriorsmn.com/wp-content/uploads/2024/03/square-bullets-red.svg",
        },
        {
          text: "Systèmes adaptés à l'agriculture et à l'irrigation",
          icon: "https://homefrontexteriorsmn.com/wp-content/uploads/2024/03/square-bullets-red.svg",
        },
      ],
      social: [
        {
          text: "Témoignages d'agriculteurs satisfaits",
          icon: "https://homefrontexteriorsmn.com/wp-content/uploads/2024/03/google-g-logo.svg",
        },
        {
          text: "Communauté Facebook",
          icon: "https://homefrontexteriorsmn.com/wp-content/uploads/2024/03/facevook-f-logo.svg",
        },
        {
          text: "Support technique dédié",
          icon: "https://mlg2i1jqo1iw.i.optimole.com/w:auto/h:auto/q:mauto/ig:avif/https://homefrontexteriorsmn.com/wp-content/themes/home-front-exteriors/inc/img/neighbor-trust-photos.png",
        },
      ],
    },
    section2: {
      imageSrc:
        "https://tse4.mm.bing.net/th/id/OIP.gLCcClxYlLbX1S79z2ZvGQHaE6?r=0&w=3216&h=2136&rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Pourquoi choisir le pompage solaire ?",
      description: `Le pompage solaire permet d'accéder à l'eau partout, sans dépendre du réseau électrique. C'est une solution économique, écologique et durable, idéale pour les zones rurales et agricoles.`,
    },
    section3: {
      title: "Nos engagements",
      description: `Nous vous accompagnons à chaque étape : étude, installation, formation et maintenance. Notre priorité est votre satisfaction et la fiabilité de votre système.`,
      valueBoxData: [
        {
          imgSrc:
            "https://theroofingtitan.com/wp-content/uploads/2024/01/icon-blue-hat.svg",
          altText: "Sécurité",
          title: "Sécurité",
          description:
            "Tous nos employés travaillent selon les normes de sécurité les plus strictes.",
        },
        {
          imgSrc:
            "https://theroofingtitan.com/wp-content/uploads/2024/01/icon-blue-check.svg",
          altText: "Qualité",
          title: "Qualité",
          description:
            "Nous sommes fiers de n'utiliser que des matériaux certifiés et de garantir un travail soigné.",
        },
        {
          imgSrc:
            "https://theroofingtitan.com/wp-content/uploads/2024/01/icon-blue-chat.svg",
          altText: "Accompagnement",
          title: "Accompagnement",
          description:
            "Nous prenons soin de votre maison comme si c'était la nôtre et veillons à votre satisfaction tout au long du projet.",
        },
        {
          imgSrc:
            "https://theroofingtitan.com/wp-content/uploads/2024/01/icon-blue-eye.svg",
          altText: "Transparence",
          title: "Transparence",
          description:
            "Nous sommes toujours honnêtes et transparents avec nos clients et nos équipes.",
        },
        {
          imgSrc:
            "https://theroofingtitan.com/wp-content/uploads/2024/01/icon-blue-hi5.svg",
          altText: "Confiance",
          title: "Confiance",
          description:
            "Construire des relations durables basées sur la confiance est notre priorité.",
        },
      ],
    },
    section4: {
      title: "Demandez votre devis gratuit",
      description: `Contactez-nous pour une étude gratuite et découvrez comment le pompage solaire peut transformer votre quotidien.`,
      imageSrc:
        "https://www.irishtimes.com/resizer/bDUWqpeMFDWx-1N77kzr3Kh6UKc=/1440x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/4WAFSDTPWDL2BR6F6YGSDI6T2I.jpg",
      button: {
        text: "Devis Gratuit",
        iconClass: "fa-solid fa-caret-right",
        link: "/contact",
      },
    },
    section5: {
      title: "Nos réalisations en pompage solaire",
      projects: [
        {
          imgSrc:
            "https://images.pexels.com/photos/14209079/pexels-photo-14209079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          altText: "Pompage solaire Pexels 1",
          id: 0,
        },
        {
          imgSrc:
            "https://images.pexels.com/photos/14209079/pexels-photo-14209079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          altText: "Pompage solaire Pexels 2",
          id: 1,
        },
        {
          imgSrc:
            "https://images.pexels.com/photos/14209079/pexels-photo-14209079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          altText: "Pompage solaire Pexels 3",
          id: 2,
        },
        {
          imgSrc:
            "https://images.pexels.com/photos/14209079/pexels-photo-14209079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          altText: "Pompage solaire Pexels 4",
          id: 3,
        },
      ],
    },
  },
  {
    path: "maintenance-et-suivi",
    section1: {
      title: "Maintenance et suivi des installations solaires",
      subtitle: "Assurez la performance de votre système solaire",
      description: `Un entretien régulier garantit la longévité et l'efficacité de votre installation solaire. Nous proposons des contrats de maintenance adaptés à vos besoins, incluant des contrôles, des nettoyages et des interventions rapides en cas de panne.`,
      features: [
        {
          text: "Contrôles périodiques et diagnostics",
          icon: "https://homefrontexteriorsmn.com/wp-content/uploads/2024/03/square-bullets-red.svg",
        },
        {
          text: "Nettoyage des panneaux et optimisation",
          icon: "https://homefrontexteriorsmn.com/wp-content/uploads/2024/03/square-bullets-red.svg",
        },
        {
          text: "Interventions rapides en cas de panne",
          icon: "https://homefrontexteriorsmn.com/wp-content/uploads/2024/03/square-bullets-red.svg",
        },
      ],
      social: [
        {
          text: "Clients satisfaits",
          icon: "https://homefrontexteriorsmn.com/wp-content/uploads/2024/03/google-g-logo.svg",
        },
        {
          text: "Support technique 24/7",
          icon: "https://homefrontexteriorsmn.com/wp-content/uploads/2024/03/facevook-f-logo.svg",
        },
        {
          text: "Garantie de performance",
          icon: "https://mlg2i1jqo1iw.i.optimole.com/w:auto/h:auto/q:mauto/ig:avif/https://homefrontexteriorsmn.com/wp-content/themes/home-front-exteriors/inc/img/neighbor-trust-photos.png",
        },
      ],
    },
    section2: {
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1682145596006-545b19193af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29sYXIlMjBtYWludGVuYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Pourquoi entretenir votre installation ?",
      description: `La maintenance préventive permet d'éviter les pannes, d'optimiser la production et de prolonger la durée de vie de votre système solaire.`,
    },
    section3: {
      title: "Nos services de maintenance",
      description: `Nous proposons des visites régulières, des contrôles techniques et un service d'intervention rapide pour garantir la performance de votre installation.`,
      valueBoxData: [
        {
          imgSrc:
            "https://theroofingtitan.com/wp-content/uploads/2024/01/icon-blue-hat.svg",
          altText: "Sécurité",
          title: "Sécurité",
          description:
            "Tous nos employés travaillent selon les normes de sécurité les plus strictes.",
        },
        {
          imgSrc:
            "https://theroofingtitan.com/wp-content/uploads/2024/01/icon-blue-check.svg",
          altText: "Qualité",
          title: "Qualité",
          description:
            "Nous sommes fiers de n'utiliser que des matériaux certifiés et de garantir un travail soigné.",
        },
        {
          imgSrc:
            "https://theroofingtitan.com/wp-content/uploads/2024/01/icon-blue-chat.svg",
          altText: "Accompagnement",
          title: "Accompagnement",
          description:
            "Nous prenons soin de votre maison comme si c'était la nôtre et veillons à votre satisfaction tout au long du projet.",
        },
        {
          imgSrc:
            "https://theroofingtitan.com/wp-content/uploads/2024/01/icon-blue-eye.svg",
          altText: "Transparence",
          title: "Transparence",
          description:
            "Nous sommes toujours honnêtes et transparents avec nos clients et nos équipes.",
        },
        {
          imgSrc:
            "https://theroofingtitan.com/wp-content/uploads/2024/01/icon-blue-hi5.svg",
          altText: "Confiance",
          title: "Confiance",
          description:
            "Construire des relations durables basées sur la confiance est notre priorité.",
        },
      ],
    },
    section4: {
      title: "Demandez votre contrat de maintenance",
      description: `Contactez-nous pour un devis personnalisé et bénéficiez d'un suivi professionnel pour votre installation solaire.`,
      button: {
        text: "Devis Gratuit",
        iconClass: "fa-solid fa-caret-right",
        link: "/contact",
      },
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1682145596006-545b19193af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29sYXIlMjBtYWludGVuYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    section5: {
      title: "Nos interventions récentes",
      projects: [
        {
          imgSrc:
            "https://images.pexels.com/photos/4254160/pexels-photo-4254160.jpeg?auto=compress&cs=tinysrgb&w=800",
          altText: "Maintenance solaire Pexels 1",
          id: 0,
        },
        {
          imgSrc:
            "https://images.pexels.com/photos/4254160/pexels-photo-4254160.jpeg?auto=compress&cs=tinysrgb&w=800",
          altText: "Maintenance solaire Pexels 2",
          id: 1,
        },
        {
          imgSrc:
            "https://images.pexels.com/photos/4254160/pexels-photo-4254160.jpeg?auto=compress&cs=tinysrgb&w=800",
          altText: "Maintenance solaire Pexels 3",
          id: 2,
        },
        {
          imgSrc:
            "https://images.pexels.com/photos/4254160/pexels-photo-4254160.jpeg?auto=compress&cs=tinysrgb&w=800",
          altText: "Maintenance solaire Pexels 4",
          id: 3,
        },
      ],
    },
  },
];

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/apropos" element={<About />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/projets" element={<Projects />}></Route>
      <Route path="/faq" element={<Faq />}></Route>
      <Route path="/avis" element={<Reviews />}></Route>

      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/merci" element={<Merci />}></Route>

      {/* service Routes */}
      {servicesData.map((item, index) => {
        return (
          <Route
            key={index}
            path={item.path}
            element={<ServiceType data={item} />}></Route>
        );
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
