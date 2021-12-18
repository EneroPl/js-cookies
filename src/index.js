import { parseOptions } from './helpers.js';

function setCookie(key, value, options = {}) {
  try {
    const setString = `${key}=${JSON.stringify(value)};`;
    let parsedOptions = parseOptions(options);
    document.cookie = [setString, ...parsedOptions].join('; ');
    
    return true;
  } catch (err) {
    return false;
  }
}

function getCookie(key) {
  try {
    const cookies = document.cookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
      const [cookieKey, cookieValue] = cookies[i].split('=');
      
      if (cookieKey.trim() === key) {
        return JSON.parse(cookieValue);
      }
    }

    return false;
  } catch (err) {
    return false;
  }
}

function deleteCookie(key, defineOptions = null) {
  try {
    const isExistCookie = getCookie(key);
    const deleteString = `${key}=; Max-Age=-1;`;
    let parsedOptions = parseOptions(defineOptions);

    if (!!isExistCookie) {
      document.cookie = [deleteString, ...parsedOptions];
      return true;
    }

    return false;
  } catch (err) {
    return false;
  }
}

export { setCookie, getCookie, deleteCookie };