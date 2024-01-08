// math2 module

const add = (a, b) => a + b;
const PI = 3.141592;
const E = 2.718;

// 1) 객체로 감싸서 내보내기
module.exports = {
  add: add,
  PI, // PI: PI랑 같은 의미
  E: E,
};
