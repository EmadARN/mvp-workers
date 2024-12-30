import Stepper from "../Stepper";
import Loading from "../../../common/Loading";
import { useRegisterLogic } from "./useRegisterLogic";
import { useFormState } from "../../../context/StateContext";
import CustomeBtn from "../../../common/CustomeBtn";

const RegisterMain = () => {
  const {
    formData,
    isLoading,
    fields,
    handleChange,
    handleSubmit,
    isFormValid,
  } = useRegisterLogic();

  const { formState } = useFormState();

  return (
    <div className="flex justify-center items-center flex-col px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-6">
      <Stepper currentStep={2} />

      <div className="bg-white p-6 rounded-lg shadow-md max-w-full w-full sm:max-w-screen-sm lg:max-w-screen-md">
        <h2 className="text-center text-2xl text-main-1 font-bold mb-6">
          ساخت اکانت جدید
        </h2>

        <form onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <div className="mb-4" key={index}>
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
                  value={formData[field.id]}
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
                    <>
                      <option key={index} value={option}>
                        {option}
                      </option>
                    </>
                  ))}
                </select>
              ) : null}
            </div>
          ))}

          {isLoading ? (
            <Loading />
          ) : (
            <CustomeBtn
              content={formState ? "ویرایش" : "ساخت اکانت"}
              disabled={!formState && !isFormValid()}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default RegisterMain;
