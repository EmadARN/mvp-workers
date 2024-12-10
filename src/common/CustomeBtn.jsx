import Loading from "./Loading";

const CustomeBtn = ({
  loading,
  content,
  clickHandler,
  w = 40,
  pb = 8,
  disabled = false,
}) => {
  return (
    <div className={`flex justify-center pb-${pb}`}>
      <button
        type="submit"
        className={`w-40 h-8 md:w-${w} md:h-12 ${
          disabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-main-1 hover:scale-105"
        } text-white rounded-md mt-4 transition-all duration-300 transform pt-1`}
        onClick={(e) => !disabled && clickHandler(e)}
        disabled={disabled}
      >
        {loading ? <Loading /> : content}
      </button>
    </div>
  );
};

export default CustomeBtn;
