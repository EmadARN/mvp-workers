import { useState, useRef } from "react";

const usePinInput = (length) => {
  const [pin, setPin] = useState(new Array(length).fill("")); // مقدار اولیه پین
  const inputRefs = useRef([]); // ریفرنس‌های ورودی

  const handleChange = (value, index) => {
    const updatedPin = [...pin];
    updatedPin[index] = value.slice(-1); // فقط آخرین کاراکتر را ذخیره می‌کنیم
    setPin(updatedPin);

    // فوکوس خودکار به خانه بعدی (از چپ به راست)
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // کلید Backspace و فوکوس به خانه قبلی
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const getInputProps = (index) => ({
    value: pin[index],
    maxLength: 1,
    onChange: (e) => handleChange(e.target.value, index),
    onKeyDown: (e) => handleKeyDown(e, index),
    ref: (el) => (inputRefs.current[index] = el),
  });

  return {
    pin: pin.join(""), // مقدار کامل پین
    setPin,
    getInputProps, // پراپ‌های ورودی
    inputRefs, // ریفرنس‌ها (در صورت نیاز به اعمال تغییرات)
  };
};

export default usePinInput;
