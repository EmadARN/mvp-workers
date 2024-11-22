import TextField from "../../../common/TextField";

const SendOTPForm = ({ phoneNumber, onChange, onSubmit }) => {
  return (
    <div>
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
            className="btn w-[50%] bg-main-1 rounded-md text-main-2 py-2"
          >
            ارسال کد تایید
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendOTPForm;
