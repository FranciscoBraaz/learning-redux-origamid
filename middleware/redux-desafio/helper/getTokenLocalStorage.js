export function getTokenLocalStorage(key, initial) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return initial;
  }
}
