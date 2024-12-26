import { useEffect, useState } from "react";
import Title from "../common/Tilte";
import { useAuth, useAuthActions } from "../context/AuthReducer";
import { CiSearch } from "react-icons/ci";
import { useLocation } from "react-router-dom";

const Table = () => {
  const location = useLocation();
  const [searchState, setSearchState] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const dispatch = useAuthActions();
  const { userInTable } = useAuth();

  useEffect(() => {
    dispatch({
      type: "USERS_TABLE",
    });
  }, []);



  useEffect(() => {
    if (userInTable) {
      const searchQuery = searchState.toLowerCase();
      const filtered = userInTable.filter((user) => {
       
        const isMatchingJob =
          (location.pathname === "/constructionServices" &&
            user.job === "خدمات ساختمانی") ||
          (location.pathname === "/homeServices" &&
            user.job === "خدمات منزل") ||
          (location.pathname !== "/constructionServices" &&
            location.pathname !== "/homeServices");

    
        return (
          isMatchingJob &&
          (user.first_name.toLowerCase().includes(searchQuery) ||
            user.last_name.toLowerCase().includes(searchQuery) ||
            user.job.toLowerCase().includes(searchQuery))
        );
      });
      setFilteredUsers(filtered);
    }
  }, [searchState, userInTable, location.pathname]);

  return (
    <>
      <div className="my-16">
        <Title title="ثبت نامی های اخیر" />
      </div>
      <div className="overflow-x-auto">
        {location.pathname === "/allWorker" || location.pathname==="/constructionServices" || location.pathname==="/homeServices" ? (
          <div className="w-full relative flex justify-start mb-7">
            <input
              onChange={(e) => setSearchState(e.target.value)}
              placeholder="جستجو"
              className="border-b-2 border-black outline-0 text-center"
            />
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <CiSearch size={"20px"} fontWeight={"bold"} />
            </div>
          </div>
        ) : null}

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
            {filteredUsers && filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr key={index} className="bg-white hover:bg-gray-100 w-[100%]">
                  <td className="px-4 py-2 border border-gray-300">
                    <img
                      src={
                        user.profile_image || "https://via.placeholder.com/40"
                      }
                      alt="Profile"
                      className="rounded-full w-10 h-10"
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {user.first_name} {user.last_name}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {user.job}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {user.work_experience} سال
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {user.phone_number}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="text-center px-4 py-2 border border-gray-300"
                >
                  هیچ کاربری یافت نشد
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
