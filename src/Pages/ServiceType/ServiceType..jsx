import Layout from "../../Components/Layouts/Layout";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";

export default function ServiceType({ data }) {
  return (
    <Layout>
      <div className="service-type">
        <Section1 data={data.section1} />
        <Section2 data={data.section2} />
        <Section3 data={data.section3} />
        <Section4 data={data.section4} />
        <Section5 data={data.section5} />
      </div>
    </Layout>
  );
}
