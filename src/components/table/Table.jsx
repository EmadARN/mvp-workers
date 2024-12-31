import { useEffect, useMemo, useState } from "react";
import { useAuth, useAuthActions } from "../../context/AuthReducer";
import { CiSearch } from "react-icons/ci";
import { AiOutlineReload } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useCookie } from "../../hooks/useCookies";
import Pagination from "./Pagination";
import Title from "../../common/Tilte";
import Loading from "../../common/Loading";

const Table = ({ title }) => {
  const location = useLocation();
  const [searchState, setSearchState] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  const dispatch = useAuthActions();
  const { userInTable } = useAuth();
  const [cookieValue] = useCookie("auth-token");
  const [loading, setLoading] = useState(false);

  // درخواست برای دریافت داده‌ها
  const fetchData = async () => {
    if (!loading) {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // شبیه‌سازی تأخیر
        dispatch({
          type: "USERS_TABLE",
          token: cookieValue,
        });
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [dispatch, cookieValue]);

  // فیلتر کردن کاربران
  const filteredUsers = useMemo(() => {
    if (!userInTable) return [];

    const searchQuery = searchState.toLowerCase();
    return userInTable.filter((user) => {
      const isMatchingJob =
        (location.pathname === "/services/construction" &&
          user.job === "خدمات ساختمانی") ||
        (location.pathname === "/services/homeService" &&
          user.job === "خدمات منزل") ||
        (location.pathname !== "/services/construction" &&
          location.pathname !== "/services/homeService");

      return (
        isMatchingJob &&
        (user.first_name.toLowerCase().includes(searchQuery) ||
          user.last_name.toLowerCase().includes(searchQuery) ||
          user.job.toLowerCase().includes(searchQuery))
      );
    });
  }, [searchState, userInTable, location.pathname]);

  // مدیریت صفحه‌بندی
  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return location.pathname === "/"
      ? filteredUsers.slice(-5)
      : filteredUsers.slice(startIndex, endIndex);
  }, [filteredUsers, currentPage, itemsPerPage, location.pathname]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const showPagination = useMemo(
    () => filteredUsers.length > itemsPerPage && location.pathname !== "/",
    [filteredUsers.length, itemsPerPage, location.pathname]
  );

  return (
    <>
      <div className="my-16">
        <Title title={title} />
      </div>
      <div className="overflow-x-auto overflow-y-hidden">
        {(location.pathname === "/services/allWorker" ||
          location.pathname === "/services/construction" ||
          location.pathname === "/services/homeService") && (
          <div className="w-full flex items-center justify-between mb-7">
            <div className="relative flex items-center">
              <input
                onChange={(e) => setSearchState(e.target.value)}
                placeholder="جستجو"
                className="border-b-2 border-black outline-0 text-center pr-6"
              />
              <CiSearch
                size={20}
                fontWeight="bold"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              />
            </div>
            <button
              className="bg-main-1 md:bg-main-2 flex items-center p-2 rounded-md"
              onClick={fetchData}
            >
              <AiOutlineReload
                size={14}
                className="text-main-2 md:text-main-1"
              />
              <span className="text-main-2 md:text-main-1 mr-2 text-[10px] md:text-[16px]">
                بروز رسانی
              </span>
            </button>
          </div>
        )}

        {location.pathname === "/" && (
          <div className="w-full flex items-center justify-end mb-4">
            <button
              className="bg-main-1 md:bg-main-2 flex items-center p-2 rounded-md"
              onClick={fetchData}
            >
              <AiOutlineReload
                size={14}
                className="text-main-2 md:text-main-1"
              />
              <span className="text-main-2 md:text-main-1 mr-2 text-[10px] md:text-[16px]">
                بروز رسانی
              </span>
            </button>
          </div>
        )}
        <table className="w-full min-w-full table-auto border-collapse border border-gray-300">
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
            {loading ? (
              <tr>
                <td colSpan={5} className="text-center px-4 py-2">
                  <Loading />
                </td>
              </tr>
            ) : paginatedUsers && paginatedUsers.length > 0 ? (
              paginatedUsers.map((user, index) => (
                <tr key={index} className="bg-white hover:bg-gray-100 w-full">
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

        {showPagination && (
          <Pagination
            currentPage={currentPage}
            totalItems={filteredUsers.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </>
  );
};

export default Table;
