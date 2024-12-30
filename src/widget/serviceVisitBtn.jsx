import { Link } from "react-router-dom";

export const serviceVisitBtn = () => {
  return (
    <Link to="/services/allWorker" className="flex justify-center">
      <button
        className="px-9 py-3 h-15 text-lg font-bold font-sans_bold text-[#030f27] bg-[#fdbe33] 
                 border-2 border-[#fdbe33] rounded-sm transition-all duration-500 ease-in-out 
                 hover:bg-transparent hover:text-[#fdbe33] animate-[span1_3s_ease-in-out_infinite_alternate]"
      >
        بازدید همه سرویس‌ها
      </button>
    </Link>
  );
};
