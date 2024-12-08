import { steps } from "../../constants";

const Stepper = ({ currentStep }) => {
  return (
    <div className="w-full max-w-lg mx-auto py-10">
      <div className="flex flex-row-reverse justify-between items-center">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center">
            {/* دایره هر مرحله */}
            <div
              className={`flex items-center justify-center rounded-full w-5 h-5  md:w-10 md:h-10 first-letter:rounded-full border-2 text-[14px]  md:text-lg  ${
                currentStep > index + 1
                  ? "bg-green-500 text-white border-green-500"
                  : currentStep === index + 1
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-gray-200 text-gray-500 border-gray-300"
              }`}
            >
              {currentStep > index + 1 ? "✔" : step.id}
            </div>
            {/* متن مرحله */}
            <p
              className={`mt-2 text-[10px] md:text-lg ${
                currentStep === index + 1
                  ? "text-blue-500 font-sans"
                  : "text-gray-500"
              }`}
            >
              {step.label}
            </p>
            {/* خط اتصال */}
            {index < steps.length - 1 && (
              <div
                className={`h-1 w-full ${
                  currentStep > index + 1 ? "bg-green-500" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
