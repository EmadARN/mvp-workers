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
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <RightBar />
        </div>
        <div className="col-span-3 md:col-span-4 space-y-16 md:space-y-28">
          <Carousel />
          <BackToUp />
          <WhyWorkers />
          <CounterMain />
          <Table />
          {serviceVisitBtn()}
          <FAQs />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
