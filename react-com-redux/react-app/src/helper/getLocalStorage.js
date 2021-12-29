export function getLocalStorage(key, initialValue) {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch {
    return initialValue;
  }
}
