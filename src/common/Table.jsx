import Title from "./Tilte";

const Table = () => {
  return (
    <>
      <div>
        <Title title="ثپت نامی های اخیر" />
      </div>
      <div className="overflow-x-auto my-8">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
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
            <tr className="bg-white hover:bg-gray-100">
              <td className="px-4 py-2 border border-gray-300">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="rounded-full"
                />
              </td>
              <td className="px-4 py-2 border border-gray-300">علی احمدی</td>
              <td className="px-4 py-2 border border-gray-300">برنامه‌نویس</td>
              <td className="px-4 py-2 border border-gray-300">5 سال</td>
              <td className="px-4 py-2 border border-gray-300">09123456789</td>
            </tr>
            <tr className="bg-white hover:bg-gray-100">
              <td className="px-4 py-2 border border-gray-300">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="rounded-full"
                />
              </td>
              <td className="px-4 py-2 border border-gray-300">مریم رضایی</td>
              <td className="px-4 py-2 border border-gray-300">طراح گرافیک</td>
              <td className="px-4 py-2 border border-gray-300">3 سال</td>
              <td className="px-4 py-2 border border-gray-300">09123456780</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
