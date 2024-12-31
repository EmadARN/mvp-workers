import { useEffect, useRef, useState } from "react";
import { GrUserWorker } from "react-icons/gr";
import { IoMdPeople } from "react-icons/io";
import Counter from "./CounterAnimation";

const CounterMain = () => {
  const counterRefs = useRef([]);
  const [isInView, setIsInView] = useState([false, false]);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        const targetIndex = Number(entry.target.getAttribute("data-index"));
        setIsInView((prevState) => {
          const newState = [...prevState];
          newState[targetIndex] = true;
          return newState;
        });
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    counterRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      {/* Box 1 */}
      <div ref={(el) => (counterRefs.current[0] = el)} data-index="0">
        {isInView[0] && (
          <Counter
            startValue={0}
            endValue={10}
            icon={<GrUserWorker className="text-4xl pl-2" />}
            title="کارگران ثبت نام شده"
            bgColor="bg-main-1"
            textColor="text-[#030f27]"
          />
        )}
      </div>

      {/* Box 2 */}
      <div ref={(el) => (counterRefs.current[1] = el)} data-index="1">
        {isInView[1] && (
          <Counter
            startValue={0}
            endValue={200}
            icon={<IoMdPeople className="text-4xl pl-2" />}
            title="تعداد بازدید از سایت"
            bgColor="bg-[#030f27]"
            textColor="text-main-1"
          />
        )}
      </div>
    </div>
  );
};

export default CounterMain;
