import Stepper from "../Stepper";
import Loading from "../../../common/Loading";
import { useRegisterLogic } from "./useRegisterLogic";

const RegisterMain = () => {
  const { formData, isLoading, fields, handleChange, handleSubmit } =
    useRegisterLogic();

  return (
    <div className="flex justify-center items-center mt-20 flex-col">
      <Stepper currentStep={2} />

      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-center text-2xl text-main-1 font-bold mb-6">
          ساخت اکانت جدید
        </h2>

        <form>
          {fields.map((field) => (
            <div className="mb-4" key={field.id}>
              <label
                htmlFor={field.id}
                className="block text-sm font-medium text-gray-700"
              >
                {field.label}
              </label>
              {field.type === "text" ? (
                <input
                  type="text"
                  id={field.id}
                  name={field.id}
                  value={formData[field.id] }
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main-1"
                  placeholder={field.placeholder}
                />
              ) : field.type === "select" ? (
                <select
                  id={field.id}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main-1"
                >
                  {field.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : null}
            </div>
          ))}

          {isLoading ? (
            <Loading />
          ) : (
            <button
              onClick={handleSubmit}
              className="w-full bg-main-1 text-white py-2 rounded-md hover:bg-[#030F27] transition-all duration-300"
            >
              ساخت اکانت
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegisterMain;
