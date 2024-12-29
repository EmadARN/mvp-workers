import Layout from "../container";
import WhyWorkers from "../components/whyWorkers/WhyWorkers";
import CounterMain from "../components/counterMain/CounterMain";

const AboutUs = () => {
  return (
    <Layout>
      <div className="grid grid-cols-3">
        <div className="col-span-3 md:col-span-4 space-y-16 md:space-y-28 ">
          <WhyWorkers />
          <div className=" pb-20">
            <CounterMain />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
