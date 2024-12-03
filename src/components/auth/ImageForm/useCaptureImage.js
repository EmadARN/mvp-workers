const useCaptureImage = (
  setOpenCamera,
  setPhotoCaptured,
  videoRef,
  canvasRef,
  setStoreData,
  setPreviewImage,
  setIsDisable,
  setCameraStream
) => {
  const handleOpenCamera = async () => {
    try {
      //code baraye dastersi be dorbine device
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraStream(stream);
      if (videoRef.current) videoRef.current.srcObject = stream;
      setOpenCamera(true);
      setIsDisable(true);
    } catch (error) {
      console.error("Error accessing camera: ", error);
      alert("خطایی در دسترسی به دوربین رخ داده است.");
    }
  };
  const handleCapturePhoto = () => {
    if (canvasRef.current && videoRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

      // تبدیل داده به Blob
      canvas.toBlob((blob) => {
        if (blob) {
          // ایجاد یک فایل از Blob
          const file = new File([blob], "captured-image.png", {
            type: "image/png",
          });

          // افزودن فایل به state
          setStoreData(file);
          setPreviewImage(URL.createObjectURL(file)); // ایجاد URL برای پیش‌نمایش
          setPhotoCaptured(true);
        }
      }, "image/png");
    }
  };
  return {
    handleOpenCamera,
    handleCapturePhoto,
  };
};

export default useCaptureImage;
