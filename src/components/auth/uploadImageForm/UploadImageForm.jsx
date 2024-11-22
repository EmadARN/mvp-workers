import { useEffect, useRef, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { CameraPreview } from "./CameraPreview";

const UploadImageForm = () => {
  const [openCamera, setOpenCamera] = useState(false);
  const [openFile, setOpenFile] = useState(false);
  const [storeData, setStoreData] = useState(null);
  const [cameraStream, setCameraStream] = useState(null);
  const [photoCaptured, setPhotoCaptured] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleOpenCamera = async () => {
    try {
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
      setStoreData(imageData);
      setPhotoCaptured(true);
    }
  };

  const handleSavePhoto = () => {
    alert("عکس ذخیره شد!");
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setStoreData(imageUrl);
      setOpenFile(true);
      setPhotoCaptured(true);
      setOpenCamera(false);
    }
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
          className={`bg-yellow-400 text-gray-900 p-3 font-bold text-lg hover:bg-yellow-500 flex items-center justify-center space-x-2 rounded-md transition duration-300 ${
            isUploading ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={() => document.getElementById("file-input").click()}
          disabled={isUploading}
        >
          <IoCloudUploadOutline className="text-gray-900" />
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
          className={`transition-all duration-500 p-3 text-yellow-400 font-semibold bg-gray-900 rounded-l-full text-lg hover:bg-gray-800 hover:text-yellow-400 ${
            isUploading ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isUploading}
        >
          باز شدن دوربین
        </button>
      </div>
      <div className="mt-8 flex justify-center">
        <button
          className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold text-lg rounded transition duration-500 hover:bg-gray-800 hover:text-yellow-400"
        >
          ادامه
        </button>
      </div>
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
