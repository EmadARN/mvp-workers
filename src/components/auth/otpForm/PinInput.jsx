import { useState, useRef } from "react";

const PinInput = ({ length = 6, onSubmit }) => {
  const [pin, setPin] = useState(new Array(length).fill(""));

  // ایجاد یک آرایه از ریفرنس‌ها برای ذخیره ورودی‌ها
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    const updatedPin = [...pin];
    updatedPin[index] = value.slice(-1); // فقط آخرین کاراکتر را ذخیره می‌کنیم
    setPin(updatedPin);

    // فوکوس خودکار به خانه قبلی (بر اساس ترتیب از راست به چپ)
    if (value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // در صورتی که کلید Backspace زده شود و ورودی خالی باشد
    if (e.key === "Backspace" && !pin[index] && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(pin.join("")); // ارسال پین وارد شده
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center gap-x-2"
    >
      {pin.map((value, index) => (
        <input
          key={index}
          type="text"
          value={value}
          maxLength="1"
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputRefs.current[index] = el)} // ذخیره ریفرنس ورودی
          autoFocus={index === length - 1} // فوکوس روی آخرین ورودی
          className="w-12 h-12 border-2 border-gray-300 text-center text-xl font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />
      ))}
    </form>
  );
};

export default PinInput;
