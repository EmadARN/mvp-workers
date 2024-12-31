import { Link } from "react-router-dom";

const BtnAnimation = ({ title, color, size, ffamily, fweight }) => {
  return (
    <Link to="/signIn">
      <div className="relative overflow-hidden ">
        {/* انیمیشن خطوط */}
        <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-[#030f27] to-main-1 animate-line1"></div>
        <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#030f27] to-main-1 animate-line2"></div>
        <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-[#030f27] to-main-1 animate-line3"></div>

        <div className="relative z-10 flex items-center justify-center px-4 md:px-10 py-3 text-center whitespace-nowrap">
          <button
            className="text-white font-sans_bold"
            style={{
              color: color,
              fontFamily: ffamily,
              fontSize: size,
              fontWeight: fweight,
            }}
          >
            {title}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BtnAnimation;
