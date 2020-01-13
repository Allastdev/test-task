export const localStorageSet = (key, value, isObj) => {
   isObj ? localStorage.setItem(key,JSON.stringify(value)) : localStorage.setItem(key,value)
}
export const localStorageGet = (key, isObj) => {
  return isObj ? JSON.parse(localStorage.getItem(key)) : localStorage.getItem(key)
}
export const localStorageRemove = (key) => {
  localStorage.removeItem(key);
}
