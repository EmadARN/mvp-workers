import Layout from "../container";
import RightBar from "../container/RightBar";
import WhyWorkers from "../components/whyWorkers/WhyWorkers";
import CounterMain from "../components/counterMain/CounterMain";

const AboutUs = () => {
  return (
    <Layout>
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <RightBar
            height={"100%"}
            topPositionH={1050}
            signinButtonPositionH={500}
          />
        </div>
        <div className="col-span-3 md:col-span-4 space-y-16 md:space-y-28 mt-20">
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
