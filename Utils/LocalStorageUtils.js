const getFromStorage = (key, string) => {
  if (typeof window !== 'undefined') {
    if (string) {
      return window.localStorage.getItem(key);
    } else {
      return JSON.parse(window.localStorage.getItem(key));
    }
  }
};

const setToStorage = (key, value) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.setItem(key, value);
  }
};

export { getFromStorage, setToStorage };
