import Layout from "../container";
import RightBar from "../container/RightBar";
import Table from "../components/Table";
import BtnAnimation from "../common/BtnAnimation";

const AllWorkerPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <RightBar />
        </div>
        <div className="col-span-3 md:col-span-4 space-y-16 mx-16 ">
          <Table />
          <div className="w-full flex justify-center">
            <BtnAnimation
              title="ثبت نام کارجو"
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

export default AllWorkerPage;
