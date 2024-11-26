const Loading = () => {
  return (
    <div className="flex items-center justify-center pt-1">
      <div className="w-2 h-2 bg-main-2 rounded-full animate-bounce-delay-0"></div>
      <div className="w-2 h-2 bg-main-2 rounded-full animate-bounce-delay-200"></div>
      <div className="w-2 h-2 bg-main-2 rounded-full animate-bounce-delay-400"></div>
    </div>
  );
};

export default Loading;
