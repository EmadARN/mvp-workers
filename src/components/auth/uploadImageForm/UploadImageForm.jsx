import { useEffect, useRef, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { CameraPreview } from "./CameraPreview";
import { useAuth, useAuthActions } from "../../../context/AuthReducer";
import { useNavigate } from "react-router-dom";
import { useCookie } from "../../../hooks/useCookies";

const UploadImageForm = ({ setCurrentStep }) => {
  const [openCamera, setOpenCamera] = useState(false);
  const [openFile, setOpenFile] = useState(false);
  const [storeData, setStoreData] = useState(null);
  const [cameraStream, setCameraStream] = useState(null);//baraye controle vaziate dorbin
  const [photoCaptured, setPhotoCaptured] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [cookieValue, setBrowserCookie] = useCookie("auth-token");

  const navigate = useNavigate();
  const dispatch = useAuthActions();
  const { phone_number } = useAuth();

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleOpenCamera = async () => {
    try {
      //code baraye dastersi be dorbine device
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraStream(stream);
      if (videoRef.current) videoRef.current.srcObject = stream;
      setOpenCamera(true);
      setIsUploading(true);
    } catch (error) {
      console.error("Error accessing camera: ", error);
      alert("خطایی در دسترسی به دوربین رخ داده است.");
    }
  };

  const handleCloseCamera = () => {
    if (cameraStream) {
      const tracks = cameraStream.getTracks();
      tracks.forEach((track) => track.stop());
    }
    setOpenCamera(false);
    setCameraStream(null);
    setStoreData(null);
    setPhotoCaptured(false);
    setIsUploading(false);
  };

  const handleCapturePhoto = () => {
    if (canvasRef.current && videoRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

      const imageData = canvas.toDataURL("image/png");
      console.log("Captured image data:", imageData); // بررسی مقدار
      setStoreData(imageData); // مقداردهی `storeData`
      setPhotoCaptured(true);
    }
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      console.log("Uploaded image URL:", imageUrl); // بررسی مقدار
      setStoreData(imageUrl); // مقداردهی `storeData`
      setOpenFile(true);
      setPhotoCaptured(true);
      setOpenCamera(false);
    }
  };

  const handleSavePhoto = () => {
    alert("عکس ذخیره شد!");
    if (cameraStream) {
      const tracks = cameraStream.getTracks();
      tracks.forEach((track) => track.stop());
    }
    setOpenCamera(false);
    setCameraStream(null);
    setPhotoCaptured(false);
    setIsUploading(false);
  };

  const handleDeletePhoto = () => {
    setStoreData(null);
    setPhotoCaptured(false);
    setOpenFile(false);
    setIsUploading(false);
  };

  useEffect(() => {
    if (openCamera && videoRef.current && cameraStream) {
      videoRef.current.srcObject = cameraStream;
      videoRef.current.play();
    }
  }, [openCamera, cameraStream, photoCaptured]);

  const confirmCameraHandler = async (e) => {
    e.preventDefault();
    console.log("storeData:", storeData); // بررسی مقدار
    if (!storeData) {
      alert("هیچ عکسی بارگذاری نشده است!");
      return;
    }
    dispatch({
      type: "IMG_POST",
      payload: {
        storeData: storeData,
        phone_number: phone_number,
        token: cookieValue,
      },
    });
    setCurrentStep(5);
    localStorage.setItem("authStep", "5"); // ذخیره مرحله در localStorage
    navigate(`/signIn/step5`);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h4 className="text-3xl font-bold text-center sm:text-2xl md:text-3xl mt-8 mb-4">
        بارگذاری چهره متقاضی
      </h4>
      <p className="text-lg text-center sm:text-base md:text-lg mb-2">
        با رعایت قوانین مشخص شده در انتهای صفحه ,از چهره تان عکس بگیرید و آن را
        بارگذاری کنید.
      </p>

      {openFile || openCamera ? (
        <CameraPreview
          storeData={storeData}
          videoRef={videoRef}
          photoCaptured={photoCaptured}
          onCapture={handleCapturePhoto}
          onSave={handleSavePhoto}
          onDelete={handleDeletePhoto}
          onClose={handleCloseCamera}
        />
      ) : (
        <div className="flex flex-col items-center">
          <img
            style={{ width: "60%" }}
            src="https://logodix.com/logo/1314431.png"
            alt="Default Camera Icon"
            className="mb-4"
          />
        </div>
      )}

      <div className="my-8">
        <h5 className="text-2xl font-bold text-right sm:text-xl md:text-2xl font-sans_bold mb-4">
          قوانین عکس برداری
        </h5>
        <p className="text-xl text-right sm:text-base md:text-lg mb-2">
          تمام رخ روبه روی دوربین بایستید و از چهره تان عکس بگیرید.
        </p>
        <p className="text-xl text-right sm:text-base md:text-lg">
          لازم است عکستان با پس زمینه سفید و بدون عینک و کلاه و زیورالات باشد.
        </p>
      </div>

      <div className="flex justify-center mb-4 ">
        <button
          className={`bg-main-1 text-gray-900 p-3 font-bold text-lg hover:bg-yellow-500 flex items-center justify-center space-x-6 transition duration-300 gap-x-2${
            isUploading ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={() => document.getElementById("file-input").click()}
          disabled={isUploading}
        >
          <IoCloudUploadOutline className="text-gray-900 " />
          <span>بارگذاری عکس</span>
        </button>
        <input
          id="file-input"
          type="file"
          className="hidden"
          onChange={uploadImage}
        />
        <button
          onClick={handleOpenCamera}
          className={`transition-all duration-500 p-3 text-main-1 font-semibold bg-gray-900 rounded-l-full text-lg hover:bg-gray-800 hover:text-main-1 ${
            isUploading ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isUploading}
        >
          باز شدن دوربین
        </button>
      </div>

      <button
        onClick={confirmCameraHandler}
        className="w-40 h-12 bg-main-1 text-white rounded-md mt-4 transition-all duration-300 transform hover:scale-105"
      >
        تایید
      </button>

      <canvas
        ref={canvasRef}
        className="hidden"
        width="640"
        height="480"
      ></canvas>
    </div>
  );
};

export default UploadImageForm;
