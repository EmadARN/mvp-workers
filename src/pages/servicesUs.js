import Layout from "../container";
import OurService from "../components/ourServices/Services";
import RightBar from "../container/RightBar";

const ServicesUs = () => {
  return (
    <Layout>
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <RightBar />
        </div>
        <div className="col-span-3 md:col-span-4 space-y-16 md:space-y-28">
          <OurService />
        </div>
      </div>
    </Layout>
  );
};

export default ServicesUs;
