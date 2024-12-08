import Layout from "../container";
import OurService from "../components/ourServices/Services";
import RightBar from "../container/RightBar";

const ServicesUs = () => {
  return (
    <Layout>
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <RightBar
            height={"111.4%"}
            topPositionH={480}
            signinButtonPositionH={10}
          />
        </div>
        <div className="col-span-3 md:col-span-4 mx-16">
          <OurService />
        </div>
      </div>
    </Layout>
  );
};

export default ServicesUs;
