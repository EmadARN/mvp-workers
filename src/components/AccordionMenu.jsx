import { useState } from "react";
import Title from "../common/Tilte";

function FAQs() {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => {
    setExpanded(expanded === panel ? "" : panel);
  };

  return (
    <div>
      <Title title="سوالات شما" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {/* First Column */}
        <div>
          <FAQItem
            panel="panel1"
            title="هدف و خدمات شرکت"
            expanded={expanded}
            handleChange={handleChange}
          >
            شرکت ما به دنبال استخدام کارگران ماهر در زمینه‌های مختلف مانند ساخت
            و ساز، تاسیسات، برق‌کاری، نجاری و... است. هدف ما ارائه خدمات با
            کیفیت و تامین نیروی کار متخصص برای پروژه‌های شما می‌باشد.
          </FAQItem>

          <FAQItem
            panel="panel2"
            title="دلایل انتخاب کارگران ما"
            expanded={expanded}
            handleChange={handleChange}
          >
            کارگران ما به خوبی آموزش دیده و دارای تجربه در پروژه‌های مختلف
            هستند. آنها از ابزارهای مدرن و تکنولوژی‌های روز استفاده می‌کنند تا
            پروژه شما در کمترین زمان و با بهترین کیفیت انجام شود.
          </FAQItem>
        </div>

        {/* Second Column */}
        <div>
          <FAQItem
            panel="panel6"
            title="روند استخدام سریع"
            expanded={expanded}
            handleChange={handleChange}
          >
            روند استخدام کارگران از طریق وب‌سایت ما ساده و سریع است. تنها کافی
            است نیاز خود را مشخص کنید و ما بهترین افراد را برای شما پیشنهاد
            خواهیم داد.
          </FAQItem>

          <FAQItem
            panel="panel7"
            title="پشتیبانی و خدمات پس از استخدام"
            expanded={expanded}
            handleChange={handleChange}
          >
            ما همیشه در کنار شما خواهیم بود. پس از استخدام، در صورت بروز هرگونه
            مشکل یا نیاز به تغییرات، تیم پشتیبانی ما در دسترس است تا شما را یاری
            کند.
          </FAQItem>
        </div>
      </div>
    </div>
  );
}
const FAQItem = ({ panel, title, children, expanded, handleChange }) => {
  return (
    <div
      className="bg-[#fcfcfc] border border-gray-300 rounded-md mb-2"
      onClick={() => handleChange(panel)}
    >
      <div
        className={`flex justify-between items-center p-4 cursor-pointer ${
          expanded === panel ? "bg-main-2 text-main-1" : "bg-main-1"
        }`}
      >
        <h2 className="text-lg md:text-xl font-medium whitespace-nowrap">{title}</h2>
        <span>{expanded === panel ? "⯆" : "⯈"}</span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-1000 ease-in-out  ${
          expanded === panel ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        {expanded === panel && (
          <div className="p-4 bg-white border-t border-gray-300">
            <p className="text-lg">{children}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQs;
