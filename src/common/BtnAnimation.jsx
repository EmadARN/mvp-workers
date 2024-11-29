import { Link } from "react-router-dom";

const BtnAnimation = ({ title, color, size, ffamily, fweight }) => {
  const savedStep = localStorage.getItem("authStep");

  return (
    <div className="relative overflow-hidden">
      {/* انیمیشن خطوط */}
      <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-[#030f27] to-[#fdbe33] animate-line1"></div>
      <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#030f27] to-[#fdbe33] animate-line2"></div>
      <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-[#030f27] to-[#fdbe33] animate-line3"></div>

      <div className="relative z-10 flex items-center justify-center px-6 py-3 text-center whitespace-nowrap">
        {savedStep && (
          <Link to={`/signIn/step${savedStep}`}>
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
          </Link>
        )}
      </div>
    </div>
  );
};

export default BtnAnimation;
