import React, { useState } from "react";

function FAQs() {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => {
    setExpanded(expanded === panel ? "" : panel);
  };

  return (
    <div className="mr-2 sm:mr-10">
      <h1 className="text-2xl text-center font-semibold mb-6 mt-8">سوالات شما</h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {/* First Column */}
        <div>
          <div
            className="bg-[#fcfcfc] border border-gray-300 rounded-md mb-2"
            onClick={() => handleChange("panel1")}
          >
            <div
              className={`flex justify-between items-center p-4 cursor-pointer ${
                expanded === "panel1" ? "bg-[#030f27] text-[#fdbe33]" : "bg-[#fdbe33]"
              }`}
            >
              <h2 className="text-lg md:text-xl font-medium">چه چیزی درباره ما میخواهید؟</h2>
              <span
                className={`transition-transform transform ${
                  expanded === "panel1" ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
            {expanded === "panel1" && (
              <div className="p-4 bg-white border-t border-gray-300">
                <p className="text-lg">شرکت ما شرکتی موثر در تمامی عرصه های فنی این کشور می باشد.</p>
              </div>
            )}
          </div>

          <div
            className="bg-[#fcfcfc] border border-gray-300 rounded-md mb-2"
            onClick={() => handleChange("panel2")}
          >
            <div
              className={`flex justify-between items-center p-4 cursor-pointer ${
                expanded === "panel2" ? "bg-[#030f27] text-[#fdbe33]" : "bg-[#fdbe33]"
              }`}
            >
              <h2 className="text-lg md:text-xl font-medium">چه چیزی درباره ما میخواهید؟</h2>
              <span
                className={`transition-transform transform ${
                  expanded === "panel2" ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
            {expanded === "panel2" && (
              <div className="p-4 bg-white border-t border-gray-300">
                <p className="text-lg">شرکت ما شرکتی موثر در تمامی عرصه های فنی این کشور می باشد.</p>
              </div>
            )}
          </div>
        </div>

        {/* Second Column */}
        <div>
          <div
            className="bg-[#fcfcfc] border border-gray-300 rounded-md mb-2"
            onClick={() => handleChange("panel6")}
          >
            <div
              className={`flex justify-between items-center p-4 cursor-pointer ${
                expanded === "panel6" ? "bg-[#030f27] text-[#fdbe33]" : "bg-[#fdbe33]"
              }`}
            >
              <h2 className="text-lg md:text-xl font-medium">چه چیزی درباره ما میخواهید؟</h2>
              <span
                className={`transition-transform transform ${
                  expanded === "panel6" ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
            {expanded === "panel6" && (
              <div className="p-4 bg-white border-t border-gray-300">
                <p className="text-lg">شرکت ما شرکتی موثر در تمامی عرصه های فنی این کشور می باشد.</p>
              </div>
            )}
          </div>

          <div
            className="bg-[#fcfcfc] border border-gray-300 rounded-md mb-2"
            onClick={() => handleChange("panel7")}
          >
            <div
              className={`flex justify-between items-center p-4 cursor-pointer ${
                expanded === "panel7" ? "bg-[#030f27] text-[#fdbe33]" : "bg-[#fdbe33]"
              }`}
            >
              <h2 className="text-lg md:text-xl font-medium">چه چیزی درباره ما میخواهید؟</h2>
              <span
                className={`transition-transform transform ${
                  expanded === "panel7" ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
            {expanded === "panel7" && (
              <div className="p-4 bg-white border-t border-gray-300">
                <p className="text-lg">شرکت ما شرکتی موثر در تمامی عرصه های فنی این کشور می باشد.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
