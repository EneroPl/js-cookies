import { parseOptions, isExistKey } from './helpers.js';

const cookies = {
  set(key, value, options = {}) {
    try {
      if (!isExistKey(key)) return false;

      const settingVariable = `${key}=${JSON.stringify(value)}`;
      document.cookie = [
        settingVariable,
        parseOptions(options)
      ].join(';');

      return true;
    } catch (err) {
      return false;
    }
  },
  get(key) {
    try {
      if (!isExistKey(key)) return false;
      
      const regexp = new RegExp(`\\s*(${key})\\s*=\\s*([^;]+)`);
      const match = document.cookie.match(regexp);
      
      return !!match ? match[2] : false;
    } catch (err) {
      return false;
    }
  },
  delete(key, defineOptions = {
    maxAge: -1,
  }) {
    try {
      if (!this.get(key)) return false;

      document.cookie = [
        `${key}=;`,
        parseOptions(defineOptions)
      ].join(';');
      
      return !this.get(key);
    } catch (err) {
      return false;
    }
  }
};

export default cookies;