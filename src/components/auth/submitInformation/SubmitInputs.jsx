import { useState } from "react";

const SubmitInputs = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    job: "",
    work_experience: "",
    profile_image: "",
    city: "",
    phone_number: "",
  });

  return (
    <div className="flex flex-col items-center w-full justify-center px-4 sm:px-0">
      {/* Profile Image */}
      <div className="flex justify-center mb-5 p-2 rounded-sm border border-1 border-main-1">
        <img
          className="p-2 border-2 border-main-1 rounded-sm"
          src={user.profile_image}
          alt="Profile"
          height="270"
          width="270"
        />
      </div>

      {/* User Info Form */}
      <div className="max-w-4xl mx-auto p-4">
        {/* تغییرات برای تنظیم گرید و قرار دادن اینپوت‌ها در کنار هم */}
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
          {/* بخش نام */}
          <div className="">
            <input
              type="text"
              className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              placeholder="نام    "
              readOnly
              value={user.first_name}
              onChange={(e) => setUser({ ...user, first_name: e.target.value })}
            />
          </div>

          {/* بخش نام خانوادگی */}
          <div className="">
            <input
              type="text"
              className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              placeholder="نام خانوادگی    "
              value={user.last_name}
              onChange={(e) => setUser({ ...user, last_name: e.target.value })}
            />
          </div>

          {/* بخش شغل */}
          <div className="">
            <input
              type="text"
              className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              placeholder="شغل "
              value={user.job}
              onChange={(e) => setUser({ ...user, job: e.target.value })}
            />
          </div>

          {/* بخش شهر */}
          <div className="">
            <input
              type="text"
              className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              placeholder="شهر "
              value={user.city}
              onChange={(e) => setUser({ ...user, city: e.target.value })}
            />
          </div>

          {/* بخش سابقه */}
          <div className=" col-span-2">
            <input
              type="text"
              className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              placeholder="سابقه کاری "
              value={user.work_experience}
              onChange={(e) =>
                setUser({ ...user, work_experience: e.target.value })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitInputs;
