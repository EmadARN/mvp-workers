import { FaHome } from "react-icons/fa";
import { LuShieldAlert } from "react-icons/lu";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import builder from "../assets/image/portfolio-5.jpg";
import mechanic from "../assets/image/officecleaning.jpg";

//navBar
export const pages = [
  { id: 1, name: "خانه", to: "/" },
  { id: 2, name: "درباره ما", to: "/About" },
  { id: 3, name: "سرویس ها", to: "/ServicesPage" },
];
//footer
export const quickLinks = [
  { href: "/About", label: "درباره ما" },
  { href: "/servicesPage", label: "خدمات" },
];

export const services = [
  { href: "/About", label: "خدمات منزل" },
  { href: "/About", label: "خدمات ساختمانی" },
];

export const contactInfo = [
  { icon: "fa-map-marker-alt", text: "Your Address" },
  { icon: "fa-phone", text: "+123 456 7890" },
  { icon: "fa-envelope", text: "email@example.com" },
];
//carousel
export const carouselData = [
  {
    id: 1,
    src: "/src/assets/image/carousel-1.avif",
    title: "خانه رویایی خود را به ما بسپرید",
    text: "کارگران حرفه ای",
  },
  {
    id: 2,
    src: "/src/assets/image/carousel-2.avif",
    title: "پروژه های خود را به ما بسپارید",
    text: "ماقابل اعتماد هستیم",
  },
  {
    id: 3,
    src: "/src/assets/image/carousel-3.avif",
    title: "پروژه های خود را به ما بسپارید",
    text: "سازندگان حرفه ای",
  },
];

//register form data
export const fields = [
  {
    id: "first_name",
    label: "نام:",
    type: "text",
    placeholder: "نام خود را وارد کنید...",
  },
  {
    id: "last_name",
    label: "نام خانوادگی:",
    type: "text",
    placeholder: "نام و نام خانوادگی خود را وارد کنید...",
  },
  {
    id: "work_experience",
    label: "سابقه کار:",
    type: "text",
    placeholder: "سابقه کاری خود را وارد کنید...",
  },
  {
    id: "city",
    label: "شهر:",
    type: "select",
    options: ["زنجان"], // به راحتی می‌توانید شهرها را اضافه کنید
  },
  {
    id: "job",
    label: "شغل:",
    type: "select",
    options: ["خدمات منزل", "خدمات ساختمانی"], // لیست شغل‌ها
  },
];

//RightBar
export const navLinks = [
  {
    to: "/",
    icon: <FaHome />,
    label: "خانه",
  },
  {
    to: "/About",
    icon: <LuShieldAlert />,
    label: "درباره ما",
  },
  {
    to: "/ServicesPage",
    icon: <MdOutlineMiscellaneousServices />,
    label: "سرویس ها",
  },
];

//service
export const buttons = [
  {
    id: 1,
    name: "خدمات  ساختمانی",
    img: builder,
    desc: "نیروی کارگر ساختمان",
    to: "/allWorker",
  },
  {
    id: 2,
    name: "خدمات منزل",
    img: mechanic,
    desc: " خدمات منزل",
    to: "/allWorker",
  },
];

//stepper
export const steps = [
  { id: 1, label: "مرحله اول" },
  { id: 2, label: "مرحله دوم" },
  { id: 3, label: "مرحله سوم" },
  { id: 4, label: "مرحله چهارم" },
];
