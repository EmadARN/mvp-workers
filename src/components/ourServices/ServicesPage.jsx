import BtnAnimation from "../../common/BtnAnimation";
import Layout from "../../container";
import Table from "../Table";

const ServicesPage = ({ pageType }) => {
  const pageConfig = {
    home: {
      title: "خدمات خانگی",
      buttonTitle: "ثبت نام کارجو ",
    },
    construction: {
      title: "خدمات ساختمانی",
      buttonTitle: "ثبت نام کارجو",
    },
  };

  const { title, buttonTitle } = pageConfig[pageType] || {};

  if (!title || !buttonTitle) {
    return (
      <Layout>
        <div className="container mx-auto flex items-center justify-center h-screen">
          <p className="text-red-500 text-lg font-bold">
            صفحه مورد نظر یافت نشد.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto flex items-center justify-center h-screen px-4">
        <div className="w-full md:w-3/4 lg:w-2/3">
          <h1 className="text-2xl font-bold text-center mb-8">{title}</h1>
          <Table />
          <div className="w-full flex justify-center mb-24 md:my-4">
            <BtnAnimation
              title={buttonTitle}
              color="#111"
              size="16px"
              fweight="700"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
