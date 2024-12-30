import { useNavigate } from "react-router-dom";
import { buttons } from "../../constants";

const OurService = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {buttons.map((item) => {
          return (
            <div key={item.id} className="relative">
              <div className="relative">
                <div
                  onClick={() => navigate(item.to)}
                  className="absolute bg-black bg-opacity-50 w-full h-full opacity-0 transition-all duration-500 cursor-pointer hover:opacity-100"
                >
                  <p
                    onClick={() => navigate(item.to)}
                    className="absolute text-white right-1/2 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-xl"
                  >
                    {item.desc}
                  </p>
                </div>
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-[200px] sm:h-[250px] md:h-[300px] w-full  object-cover"
                />
              </div>

              <div className="p-0 m-0">
                <a href={item.to}>
                  <button className="w-full bg-[#030f27] text-[#fdbe33] font-lalezar text-2xl py-2 px-4 hover:bg-[#fdbe33] hover:text-[#030f27] transition-all">
                    {item.name}
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OurService;
