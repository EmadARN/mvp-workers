import Layout from "../container";
import RightBar from "../container/RightBar";
import Table from "../components/Table";

const AllWorkerPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <RightBar />
        </div>
        <div className="col-span-3 md:col-span-4 space-y-16 ">
          <Table />
        </div>
      </div>
    </Layout>
  );
};

export default AllWorkerPage;
