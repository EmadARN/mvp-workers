const Title = ({ title }) => {
  return (
    <div className="flex items-center justify-center ">
      {/* Left Line */}
      <div className="w-[5%] md:w-[3%] h-[3px] bg-[#fdbe33]"></div>

      {/* Title */}
      <p className="mx-2 text-xl font-sans_bold text-center">{title}</p>

      {/* Right Line */}
      <div className="w-[5%] md:w-[3%] h-[3px] bg-[#fdbe33]"></div>
    </div>
  );
};

export default Title;
