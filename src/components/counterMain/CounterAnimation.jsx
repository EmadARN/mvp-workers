import { useEffect, useState } from "react";

const useCounterAnimation = (
  targetValue,
  intervalTime = 30,
  incrementRate = 100
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let currentValue = 0;
    const increment = Math.ceil(targetValue / incrementRate);

    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        currentValue = targetValue;
        clearInterval(interval);
      }
      setCount(currentValue);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [targetValue, intervalTime, incrementRate]);

  return count;
};

const Counter = ({ startValue, endValue, icon, title, bgColor, textColor }) => {
  const count = useCounterAnimation(endValue);

  return (
    <div
      className={`${bgColor} ${textColor} flex justify-center items-center h-[140%] p-4`}
    >
      {icon}
      <div className="ml-2 font-sans_bold">
        {count}
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Counter;
