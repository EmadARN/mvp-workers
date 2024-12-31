import Layout from "../container";
import WhyWorkers from "../components/whyWorkers/WhyWorkers";
import CounterMain from "../components/counterMain/CounterMain";
import FAQs from "../components/AccordionMenu";

const AboutUs = () => {
  return (
    <Layout>
      <div className="mt-24 md:mt-8 space-y-16 md:space-y-28 ">
        <WhyWorkers />
        <div className=" pb-20">
          <CounterMain />
        </div>
        <div className=" mx-6 sm:mx-16 pb-12 my-16 md:my-6">
          <FAQs />
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
