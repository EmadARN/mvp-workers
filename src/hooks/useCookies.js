import { useState } from "react";

export const useCookie = (cookieName) => {
  const getCookie = (name) => {
    const cookieString = document.cookie;
    const cookies = cookieString.split("; ").reduce((acc, cookie) => {
      const [key, value] = cookie.split("=");
      acc[key] = decodeURIComponent(value);
      return acc;
    }, {});
    return cookies[name];
  };

  const [cookieValue, setCookieValue] = useState(() => getCookie(cookieName));

  // تغییر نام تابع داخلی به setBrowserCookie
  const setBrowserCookie = (value, options = {}) => {
    const { path = "/", expires, maxAge } = options;
    let cookieString = `${cookieName}=${encodeURIComponent(
      value
    )}; path=${path}`;

    if (expires) {
      cookieString += `; expires=${expires.toUTCString()}`;
    }

    if (maxAge) {
      cookieString += `; max-age=${maxAge}`;
    }

    document.cookie = cookieString;
    setCookieValue(value); // Update the state
  };

  const removeCookie = (options = {}) => {
    const { path = "/" } = options; // مطمئن شوید که مسیر صحیح تنظیم شده است
    setBrowserCookie("", { path, expires: new Date(0) }); // تاریخ انقضاء را به گذشته تنظیم می‌کنیم تا کوکی حذف شود
    setCookieValue(""); // بروزرسانی state برای نشان دادن اینکه کوکی حذف شده است
  };

  return [cookieValue, setBrowserCookie, removeCookie];
};
