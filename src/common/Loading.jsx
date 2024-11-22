import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="w-3 h-3 bg-main-2 rounded-full animate-bounce-delay-0"></div>
      <div className="w-3 h-3 bg-main-2 rounded-full animate-bounce-delay-200"></div>
      <div className="w-3 h-3 bg-main-2 rounded-full animate-bounce-delay-400"></div>
    </div>
  );
};

export default Loading;
