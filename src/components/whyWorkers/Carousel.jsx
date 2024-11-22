import { useEffect, useState } from "react";
import about1 from "../../assets/image/about1.jpeg";
import about2 from "../../assets/image/about2.jpg";

const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const imageList = [about1, about2];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center items-center ">
      <img
        src={imageList[imageIndex]}
        alt="carousel"
        className="image"
        style={{ width: "80%", height: "90%" }}
      />
    </div>
  );
};

export default Carousel;
