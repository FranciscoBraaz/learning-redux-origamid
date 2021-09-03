const li = Array.from(document.querySelectorAll("li"));

// function getElementsByAttr(el, key) {
//   return el.getAttribute(key);
// }

// function getElementsByAttr_curried(key) {
//   return function (el) {
//     return el.getAttribute(key);
//   };
// }

const getElementsByAttr_curried = (key) => (el) => el.getAttribute(key);

const getElementByData = getElementsByAttr_curried("data-slide");
const getElementById = getElementsByAttr_curried("id");

const elementByAttr = li.map((item) => getElementByData(item));
const elementById = li.map(getElementById);

console.log(elementByAttr);
console.log(elementById);
