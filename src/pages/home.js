import BackToUp from "../common/BackToUp";
import FAQs from "../components/AccordionMenu";
import Carousel from "../components/Carousel";
import CounterMain from "../components/counterMain/CounterMain";
import Table from "../components/Table";
import WhyWorkers from "../components/whyWorkers/WhyWorkers";
import Layout from "../container";
import RightBar from "../container/RightBar";
import { serviceVisitBtn } from "../widget/ServiceVisitBtn";

const Home = () => {
  return (
    <Layout>
      <div className="grid grid-cols-3 flex-grow">
       
        <div className="col-span-3 md:col-span-4 space-y-16 md:space-y-28">
          <Carousel />
          <BackToUp />
          <div className=" mx-6 sm:mx-16">
            <WhyWorkers />
          </div>
          <CounterMain />
          <div className=" mx-6 sm:mx-16">
            <Table />
          </div>
          {serviceVisitBtn()}
          <div className=" mx-6 sm:mx-16 pb-12">
            <FAQs />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
