import { useEffect, useRef, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useAuthActions } from "../../../context/AuthReducer";
import { useNavigate } from "react-router-dom";
import { useCookie } from "../../../hooks/useCookies";
import useUploadImageForm from "./useUploadImageForm";
import useCaptureImage from "./useCaptureImage";

const ImageForm = () => {
  const [previewImage, setPreviewImage] = useState(null); // visiable upload img
  const [storeData, setStoreData] = useState(null); //save img
  const [cameraStream, setCameraStream] = useState(null); //for camera satus
  const [openCamera, setOpenCamera] = useState(false);
  const [openFile, setOpenFile] = useState(false);
  const [photoCaptured, setPhotoCaptured] = useState(false);
  const [isDisable, setIsDisable] = useState(false);

  const [cookieValue] = useCookie("auth-token");
  const navigate = useNavigate();
  const dispatch = useAuthActions();

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const { handleOpenCamera, handleCapturePhoto } = useCaptureImage(
    setOpenCamera,
    setPhotoCaptured,
    videoRef,
    canvasRef,
    setStoreData,
    setPreviewImage,
    setIsDisable,
    setCameraStream
  );
  const { uploadImage } = useUploadImageForm(
    setOpenCamera,
    setPhotoCaptured,
    setOpenFile,
    setStoreData,
    setPreviewImage,
    setIsDisable
  );

  useEffect(() => {
    if (openCamera && videoRef.current && cameraStream) {
      videoRef.current.srcObject = cameraStream;
      videoRef.current.play();
    }
  }, [openCamera, cameraStream, photoCaptured]);

  const confirmCameraHandler = async (e) => {
    e.preventDefault();
    if (!storeData) {
      alert("هیچ عکسی بارگذاری نشده است!");
      return;
    }

    const formData = new FormData();
    formData.append("image", storeData); // اضافه کردن فایل به FormData

    console.log("formData", formData.get("image")); // بررسی محتوای فرم‌داده

    dispatch({
      type: "UPLOAD_IMG_POST",
      payload: {
        formData,
        token: cookieValue,
      },
    });
    dispatch({
      type: "CAPTURE_IMG_POST",
      payload: {
        formData,
        token: cookieValue,
      },
    });

    navigate('signIn/SigninFinal')
  };

  const handleDeletePhoto = () => {
    setStoreData(null);
    setPhotoCaptured(false);
    setOpenFile(false);
    setIsDisable(false);
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
    setIsDisable(false);
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
        <div className="flex flex-col items-center">
          {storeData ? (
            <img
              src={previewImage}
              alt="Captured"
              className="w-full max-w-md rounded-md mb-4"
            />
          ) : (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full max-w-md rounded-md mb-4"
            ></video>
          )}

          <div className="flex gap-x-2">
            {!photoCaptured ? (
              <button
                onClick={handleCapturePhoto}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                گرفتن عکس
              </button>
            ) : (
              <>
                <button
                  onClick={handleDeletePhoto}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  حذف عکس
                </button>
              </>
            )}
            {!photoCaptured && (
              <button
                onClick={handleCloseCamera}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                بستن دوربین
              </button>
            )}
          </div>
        </div>
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
            isDisable ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={() => document.getElementById("file-input").click()}
          disabled={isDisable}
        >
          <IoCloudUploadOutline className="text-gray-900 " />
          <span>بارگذاری عکس</span>
        </button>
        <input
          id="file-input"
          type="file"
          accept="image/png, image/jpeg"
          className="hidden"
          onChange={uploadImage}
        />
        <button
          onClick={handleOpenCamera}
          className={`transition-all duration-500 p-3 text-main-1 font-semibold bg-gray-900 rounded-l-full text-lg hover:bg-gray-800 hover:text-main-1 ${
            isDisable ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isDisable}
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

export default ImageForm;
