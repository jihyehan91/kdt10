// math2 모듈을 불러와서 사용

const math2 = require('./math2');
console.log(math2.add(3, 4));
console.log(math2.E);

// 구조분해할당은 내보낸 값과 동일한 이름으로(다른 이름으로는 선언X - 객체를 구조분해?)
const { add, PI, E } = require('./math2');
console.log(PI);

// // 2) 하나씩 내보내기
// module.exports.add = add;
// module.exports.PI = Pi;
// module.exports.E = E;

// // -> 위에 예제에서 module 생략해서 쓸 수도 있음
// exports.add = add;
// exports.PI = Pi;
// exports.E = E;
