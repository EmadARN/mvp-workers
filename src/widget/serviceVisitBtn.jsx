import { Link } from "react-router-dom";

export const serviceVisitBtn = () => {
  return (
    <Link to="/services/allWorker" className="flex justify-center">
      <button
        className="px-9 py-3 h-15 text-lg font-bold font-sans_bold text-main-2 bg-main-1
                 border-2 border-main-1 rounded-sm transition-all duration-500 ease-in-out 
                 hover:bg-transparent hover:text-main-1 animate-[span1_3s_ease-in-out_infinite_alternate]"
      >
        بازدید همه کارجویان
      </button>
    </Link>
  );
};
