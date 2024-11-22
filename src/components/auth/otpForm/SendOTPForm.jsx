import TextField from "../../../common/TextField";

const SendOTPForm = ({ phoneNumber, onChange, onSubmit }) => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10">
      <form className="space-y-10" onSubmit={onSubmit}>
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="btn w-full sm:w-[70%] md:w-[50%] lg:w-[40%] bg-main-1 rounded-md text-main-2 py-2 transition-all duration-300"
          >
            ارسال کد تایید
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendOTPForm;
