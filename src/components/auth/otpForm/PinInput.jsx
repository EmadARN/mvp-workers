import usePinInput from "../../../hooks/usePinInput";

const PinInput = ({ length = 6, onSubmit }) => {
  const { pin, getInputProps } = usePinInput(length);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(pin); // ارسال پین کامل
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center gap-x-2"
    >
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          {...getInputProps(index)} // پراپ‌های مدیریت‌شده توسط هوک
          autoFocus={index === length - 1} // فوکوس روی آخرین ورودی
          className="w-6 h-6 md:w-12 md:h-12  border-2 border-gray-300 text-center text-xl font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-main-2 transition duration-300 ease-in-out"
        />
      ))}
    </form>
  );
};

export default PinInput;
