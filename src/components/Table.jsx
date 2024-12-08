import { useEffect } from "react";
import Title from "../common/Tilte";
import { useAuth, useAuthActions } from "../context/AuthReducer";

const Table = () => {
  const dispatch = useAuthActions();
  const { loading, userInTable } = useAuth();

  useEffect(() => {
    dispatch({
      type: "USERS_TABLE",
    });
  }, []);

  return (
    <>
      <div className="my-16">
        <Title title="ثپت نامی های اخیر" />
      </div>
      <div className="overflow-x-auto ">
        <table className="w-[100%] min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-main-2 text-white">
              <th className="px-4 py-2 border border-gray-300">عکس پروفایل</th>
              <th className="px-4 py-2 border border-gray-300">
                نام و نام خانوادگی
              </th>
              <th className="px-4 py-2 border border-gray-300">حوزه فعالیت</th>
              <th className="px-4 py-2 border border-gray-300">سابقه کار</th>
              <th className="px-4 py-2 border border-gray-300">شماره همراه</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white hover:bg-gray-100 w-[100%]">
              {userInTable && userInTable.length ? (
                <>
                  <td className="px-4 py-2 border border-gray-300">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="Profile"
                      className="rounded-full"
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    علی احمدی
                  </td>
                </>
              ) : (
                <div className="w-[100%] borde m-auto flex justify-center items-center">
                  <h3>هیج کاربری وجود ندارد</h3>
                </div>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
