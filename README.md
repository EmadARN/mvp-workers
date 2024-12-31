# React + Vite Project

این پروژه یک برنامه React با استفاده از Vite است که شامل تنظیمات اولیه برای توسعه سریع، HMR (Hot Module Replacement)، و قوانین ESLint می‌باشد. در این پروژه از **Tailwind CSS** برای طراحی رابط کاربری استفاده شده است.

---

## ویژگی‌های پروژه

- **استفاده از Vite**: سرعت بالا در اجرا و ساخت پروژه.
- **Fast Refresh**: بازخوانی سریع کدها برای تجربه بهتر توسعه‌دهنده.
- **طراحی با Tailwind CSS**: طراحی سریع، زیبا و ماژولار.
- **مراحل ثبت‌نام سلسله‌مراتبی**: یک فرآیند کاربرپسند برای ثبت‌نام کاربران.

---

## ساختار فایل‌ها

```plaintext
src/
├── App.jsx            # فایل اصلی برنامه
├── main.jsx           # فایل ورودی برای Vite
├── ProtectedRoute.js  # مدیریت مسیرهای محافظت‌شده
├── Routes.js          # تعریف مسیرها
├── assets/            # منابع شامل تصاویر و فونت‌ها
├── common/            # کامپوننت‌های عمومی و قابل استفاده مجدد
├── components/        # کامپوننت‌های اصلی برنامه
├── constants/         # مقادیر ثابت و تنظیمات
├── container/         # کامپوننت‌های کانتینری (مثل AppBar و Footer)
├── context/           # مدیریت Context API برای وضعیت‌های مختلف
├── hooks/             # هوک‌های سفارشی
├── pages/             # صفحات اصلی برنامه
├── service/           # فایل‌های مرتبط با API و درخواست‌ها
├── utils/             # توابع کاربردی و ابزارها
├── widget/            # ابزارها و ویجت‌های خاص
```

---

## مراحل ثبت‌نام سلسله‌مراتبی

این پروژه دارای یک فرآیند ثبت‌نام چندمرحله‌ای کاربرپسند است:

### مرحله اول: وارد کردن شماره همراه
- کاربر شماره همراه خود را وارد می‌کند.
- درخواست ارسال کد OTP به شماره وارد شده ارسال می‌شود.

### مرحله دوم: تایید کد OTP
- کاربر کد ارسال شده به تلفن همراه خود را وارد می‌کند.
- سیستم کد وارد شده را تأیید می‌کند.

### مرحله سوم: تکمیل فرم ثبت‌نام
- کاربر اطلاعات حساب کاربری شامل نام، ایمیل، و دیگر اطلاعات را وارد می‌کند.

### مرحله چهارم: بارگذاری یا گرفتن عکس
- کاربر می‌تواند عکسی از خود بارگذاری کند یا از وب‌کم برای گرفتن عکس استفاده کند.

### مرحله پنجم: تایید اطلاعات
- تمامی اطلاعات وارد شده به کاربر نمایش داده می‌شود.
- کاربر اطلاعات را تأیید و حساب کاربری خود را نهایی می‌کند.

---

## نصب و اجرا

### 1. نصب وابستگی‌ها
ابتدا با استفاده از npm یا yarn وابستگی‌های پروژه را نصب کنید:
```bash
npm install

### 2. اجرای برنامه
برای اجرا در حالت توسعه:
```bash
npm run dev


### 3. ساخت برنامه
برای ساخت نسخه آماده تولید:
```bash
npm run build

---

## امکانات مهم

### طراحی رابط کاربری با Tailwind CSS
- استفاده از کلاس‌های پیش‌ساخته Tailwind برای طراحی سریع و زیبا.

### مدیریت مسیرهای محافظت‌شده
- استفاده از کامپوننت `ProtectedRoute` برای کنترل دسترسی کاربران به صفحات خاص.

### تعامل با API
- فایل `service/authSignIn.js` برای مدیریت درخواست‌های ورود و ثبت‌نام.

---

## مشارکت در توسعه

اگر مایل به مشارکت در توسعه هستید:
1. پروژه را فورک کنید.
2. تغییرات خود را در شاخه جدید اعمال کنید.
3. درخواست Pull ایجاد کنید.

---

src/
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── ProtectedRoute.js
│   ├── Routes.js
│   ├── assets/
│   │   ├── fonts/
│   │   │   ├── vazir/
│   │   │   │   ├── Vazirmatn-Black.woff2
│   │   │   │   ├── Vazirmatn-Bold.woff2
│   │   │   │   ├── Vazirmatn-ExtraBold.woff2
│   │   │   │   ├── Vazirmatn-Medium.woff2
│   │   │   │   ├── Vazirmatn-Regular.woff2
│   │   ├── image/
│   │   │   ├── about1.jpeg
│   │   │   ├── about2.jpg
│   │   │   ├── carousel-1.avif
│   │   │   ├── carousel-2.avif
│   │   │   ├── carousel-3.avif
│   │   │   ├── Industrial-Maintenance-Mechanic-Technician-940x529.jpg
│   │   │   ├── officecleaning.jpg
│   │   │   ├── portfolio-5.jpg
│   ├── common/
│   │   ├── BackToUp.jsx
│   │   ├── BtnAnimation.jsx
│   │   ├── CustomeBtn.jsx
│   │   ├── Loading.jsx
│   │   ├── TextField.jsx
│   │   ├── Tilte.jsx
│   ├── components/
│   │   ├── AccordionMenu.jsx
│   │   ├── Carousel.jsx
│   │   ├── auth/
│   │   │   ├── Stepper.jsx
│   │   │   ├── ImageForm/
│   │   │   │   ├── ImageForm.jsx
│   │   │   │   ├── useCaptureImage.js
│   │   │   │   ├── useUploadImageForm.js
│   │   │   ├── otpForm/
│   │   │   │   ├── CheckOTPForm.jsx
│   │   │   │   ├── SendPhoneNumberForm.jsx
│   │   │   │   ├── useCheckOTP.js
│   │   │   │   ├── usePinInput.js
│   │   │   ├── registerForm/
│   │   │   │   ├── RegisterMain.jsx
│   │   │   │   ├── useRegisterLogic.js
│   │   │   ├── submitInformation/
│   │   │   │   ├── index.jsx
│   │   │   │   ├── SubmitInputs.jsx
│   │   │   │   ├── useUserForm.js
│   │   ├── counterMain/
│   │   │   ├── CounterAnimation.jsx
│   │   │   ├── CounterMain.jsx
│   │   ├── ourServices/
│   │   │   ├── Services.jsx
│   │   │   ├── ServicesPage.jsx
│   │   ├── table/
│   │   │   ├── Pagination.jsx
│   │   │   ├── RefreshButton.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── Table.jsx
│   │   │   ├── useFilteredUsers.js
│   │   │   ├── usePagination.js
│   │   ├── whyWorkers/
│   │   │   ├── Carousel.jsx
│   │   │   ├── Details.jsx
│   │   │   ├── WhyWorkers.jsx
│   ├── constants/
│   │   ├── index.js
│   ├── container/
│   │   ├── Footer.jsx
│   │   ├── index.js
│   │   ├── appBar/
│   │   │   ├── AppBar.jsx
│   │   │   ├── NavBar.jsx
│   ├── context/
│   │   ├── AuthReducer.js
│   │   ├── signupProvider.js
│   │   ├── StateContext.js
│   ├── hooks/
│   │   ├── useCookies.js
│   ├── pages/
│   │   ├── aboutUs.js
│   │   ├── home.js
│   │   ├── servicesUs.js
│   │   ├── signIn.js
│   ├── service/
│   │   ├── authSignIn.js
│   │   ├── http.js
│   ├── utils/
│   │   ├── backToUp.js
│   │   ├── objectUtils.js
│   │   ├── toPersianDigits.js
│   ├── widget/
│   │   ├── serviceVisitBtn.jsx
