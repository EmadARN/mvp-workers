import useUserForm from "./useUserForm";

const SubmitInputs = () => {
  const { user, handleChange, userData, loading } = useUserForm();

  return (
    <div className="flex flex-col items-center w-full justify-center px-4 sm:px-6 md:px-8">
      {/* Profile Image */}
      <div className="flex justify-center mb-5 p-2 rounded-sm border border-1 border-main-1 w-full max-w-[270px]">
        <img
          className="p-2 border-2 border-main-1 rounded-sm w-full h-auto"
          src={!loading ? userData.profile_image : ""}
          alt="Profile"
        />
      </div>

      {/* User Info Form */}
      <div className="mx-auto p-4 w-full max-w-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          {["first_name", "last_name", "job", "city"].map((field, idx) => (
            <div className="col-span-1" key={idx}>
              <input
                type="text"
                readOnly
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
                placeholder={`${
                  field === "first_name"
                    ? "نام"
                    : field === "last_name"
                    ? "نام خانوادگی"
                    : field === "job"
                    ? "شغل"
                    : "شهر"
                }`}
                value={!loading ? userData[field] : ""}
                onChange={handleChange(field)}
              />
            </div>
          ))}

          {/* Work Experience */}
          <div className="col-span-1 sm:col-span-2">
            <input
              type="text"
              readOnly
              className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              placeholder="سابقه کاری"
              value={!loading ? userData.work_experience : ""}
              onChange={handleChange("work_experience")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitInputs;
