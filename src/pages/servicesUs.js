import Layout from "../container";
import OurService from "../components/ourServices/Services";
import { serviceVisitBtn } from "../widget/ServiceVisitBtn";
import Title from "../common/Tilte";

const ServicesUs = () => {
  return (
    <Layout>
      <div className="px-4 sm:px-8 md:px-16">
        <div className="mt-32 mb-12  md:my-16">
          <Title title="سرویس ها" />
        </div>
        <div className="mx-4 sm:mx-8 md:mx-16 pb-10 sm:pb-16 md:pb-20">
          <OurService />
        </div>
        <div className="flex justify-center flex-wrap gap-4 mt-1 mb-16">
          {serviceVisitBtn()}
        </div>
      </div>
    </Layout>
  );
};

export default ServicesUs;
