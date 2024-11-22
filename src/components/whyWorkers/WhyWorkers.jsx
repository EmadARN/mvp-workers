import Details from "./Details";
import Carousel from "./carousel";

const WhyWorkers = () => {
  return (
    <div className="flex flex-col md:flex-row mt-0 ">
      <div className="flex justify-center items-center w-full md:w-7/12 lg:w-7/12 xl:w-7/12 p-4">
        <Details />
      </div>

      <div className="flex justify-center items-center w-full md:w-5/12 lg:w-5/12 xl:w-5/12 p-4">
        <Carousel />
      </div>
    </div>
  );
};

export default WhyWorkers;
