import { parseToString } from './helpers/parse.js';
import { isExistKey } from './helpers/validation.js';

const cookies = {
  set(key, value, options = {}) {
    try {
      if (!isExistKey(key)) return false;

      document.cookie = parseToString(key, value, options);
      
      return true;
    } catch (err) {
      return false;
    }
  },
  get(key) {
    try {
      if (!isExistKey(key)) return false;

      const match = document.cookie.match(
        new RegExp(`\\s*(${key})\\s*=\\s*([^;]+)`)
      );

      return !!match ? match[2] : false;
    } catch (err) {
      return false;
    }
  },
  delete(key, defineOptions = {
    expires: 'Thu, 01 Jan 1970 00:00:01 GMT',
  }) {
    try {
      if (!this.get(key)) return false;

      document.cookie = parseToString(key, '', defineOptions);

      return !this.get(key);
    } catch (err) {
      return false;
    }
  }
};

export default cookies;