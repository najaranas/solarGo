import React from "react";
import Layout from "../../Components/Layouts/Layout";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import Section1 from "./Section1/Section1";

export default function Faq() {
  return (
    <Layout>
      <div className="faq">
        <HeroBanner
          subTitle="Questions fréquemment posées"
          mainTitle="Toutes les questions dont vous avez besoin"
        />
      </div>
      <Section1 />
    </Layout>
  );
}
