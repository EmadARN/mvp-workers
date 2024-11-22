import { useState, useEffect } from "react";
import { carouselData } from "../constants";
import BtnAnimation from "../common/BtnAnimation";


// تغییرات مربوط به اندازه‌های صفحه
const getSlideHeight = (width) => {
  if (width <= 480) {
    return "h-48"; // موبایل
  } else if (width <= 768) {
    return "h-56"; // تبلت
  } else {
    return "h-[800px]"; // دسکتاپ
  }
};

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isTransitioning, setIsTransitioning] = useState(false); // وضعیت برای انیمیشن

  // تغییر اسلایدها هر 3 ثانیه
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 3000);

    return () => clearInterval(interval); // تمیز کردن تایمر هنگام ترک کامپوننت
  }, []);

  // گوش دادن به تغییرات اندازه پنجره
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full max-w-full mx-auto overflow-hidden">
      {/* اسلاید با عکس */}
      <div
        className={`w-full ${getSlideHeight(
          windowWidth
        )} bg-center bg-cover transition-all duration-500 ease-in-out ${
          isTransitioning ? "opacity-90" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url(${carouselData[currentSlide].src})`,
        }}
      >
        {/* محتوای داخل اسلاید */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            {carouselData[currentSlide].title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-4">
            {carouselData[currentSlide].text}
          </p>
            <BtnAnimation
              title="ثبت نام کارجو"
              color="#fff"
              size="18px"
              fweight="700"
            />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
