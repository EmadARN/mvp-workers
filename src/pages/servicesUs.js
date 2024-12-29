import Layout from "../container";
import OurService from "../components/ourServices/Services";

const ServicesUs = () => {
  return (
    <Layout>
      <div className="grid grid-cols-3">
        <div className="col-span-3 md:col-span-4 mx-16 pb-20">
          <OurService />
        </div>
      </div>
    </Layout>
  );
};

export default ServicesUs;
