import { useState } from "react";

export const useCookie = (cookieName) => {
    const getCookie = (name) => {
      const cookieString = document.cookie;
      const cookies = cookieString.split('; ').reduce((acc, cookie) => {
        const [key, value] = cookie.split('=');
        acc[key] = decodeURIComponent(value);
        return acc;
      }, {});
      return cookies[name];
    };
  
    const [cookieValue, setCookieValue] = useState(() => getCookie(cookieName));
  
    // تغییر نام تابع داخلی به setBrowserCookie
    const setBrowserCookie = (value, options = {}) => {
      const { path = '/', expires, maxAge } = options;
      let cookieString = `${cookieName}=${encodeURIComponent(value)}; path=${path}`;
  
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
      setBrowserCookie('', { ...options, maxAge: 0 });
      setCookieValue(undefined);
    };
  
    return [cookieValue, setBrowserCookie, removeCookie];
  };
  