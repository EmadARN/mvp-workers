import Layout from "../container";
import WhyWorkers from "../components/whyWorkers/WhyWorkers";
import CounterMain from "../components/counterMain/CounterMain";

const AboutUs = () => {
  return (
    <Layout>
      <div className="mt-24 md:mt-8 space-y-16 md:space-y-28 ">
        <WhyWorkers />
        <div className=" pb-20">
          <CounterMain />
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
