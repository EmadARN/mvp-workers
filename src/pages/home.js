import BackToUp from "../common/BackToUp";
import Table from "../common/Table";
import Carousel from "../components/Carousel";
import CounterMain from "../components/counterMain/CounterMain";
import WhyWorkers from "../components/whyWorkers/WhyWorkers";
import Layout from "../container";
import { serviceVisitBtn } from "../widget/ServiceVisitBtn";

const Home = () => {
  return (
    <Layout>
      <div>
        <Carousel />
        <BackToUp />
        <WhyWorkers />
        <CounterMain />
        <Table />
        {serviceVisitBtn()}
      </div>
    </Layout>
  );
};

export default Home;
