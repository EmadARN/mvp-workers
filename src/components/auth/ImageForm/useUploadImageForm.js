const useUploadImageForm = (
  setOpenCamera,
  setPhotoCaptured,
  setOpenFile,
  setStoreData,
  setPreviewImage,
  setIsDisable
) => {
  const uploadImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = ["image/png", "image/jpeg"];
    if (!validTypes.includes(file.type)) {
      alert("فقط فرمت‌های PNG و JPG مجاز هستند.");
      return;
    }

    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      alert("حجم عکس نباید بیشتر از ۲ مگابایت باشد.");
      return;
    }

    // نمایش پیش‌نمایش تصویر
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result); // ذخیره پیش‌نمایش تصویر
      setStoreData(file); // ذخیره فایل اصلی
    };
    reader.readAsDataURL(file);

    setOpenFile(true);
    setPhotoCaptured(true);
    setOpenCamera(false);
    setIsDisable(true);
  };
  return {
    uploadImage,
  };
};

export default useUploadImageForm;
