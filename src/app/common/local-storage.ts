/*
 * @Author: qiuziz
 * @Date: 2017-08-18 15:26:27
 * */

class LocalStorageTools {
  getItem(key) {
    const value = localStorage.getItem(key);
    return value !== 'undefined' ? JSON.parse(value) : undefined;
  }

  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key) {
    localStorage.removeItem(key);
  }

  get length() {
    return localStorage.length;
  }

  key(number) {
    return localStorage.key(number);
  }

  clear() {
    localStorage.clear();
  }
}

export const LocalStorage = new LocalStorageTools();
