import BackToUp from "../common/BackToUp";
import FAQs from "../components/AccordionMenu";
import Carousel from "../components/Carousel";
import CounterMain from "../components/counterMain/CounterMain";
import Table from "../components/table/Table";
import WhyWorkers from "../components/whyWorkers/WhyWorkers";
import Layout from "../container";
import { serviceVisitBtn } from "../widget/ServiceVisitBtn";

const Home = () => {
  return (
    <Layout>
      <div className="flex-grow">
        <div className="col-span-3 md:col-span-4 md:space-y-28">
          <Carousel />
          <BackToUp />
          <div className=" mx-6 sm:mx-16 my-16 md:my-6">
            <WhyWorkers />
          </div>
          <CounterMain />
          <div className=" mx-6 sm:mx-16 my-16 md:my-6">
            <Table title="ثپت نامی های اخیر" />
            <div className="mt-6"> {serviceVisitBtn()}</div>
          </div>
          <div className=" mx-6 sm:mx-16 pb-12 my-16 md:my-6">
            <FAQs />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
