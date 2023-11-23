// 프로미스 체이닝
// 함수를 이용해서 (4+3)*2-1=13을 연산하기!

// 1. 콜백함수라면?
function add(n1, n2, cb) {
  setTimeout(function () {
    const result = n1 + n2;
    cb(result); // mul(result)
  }, 1000);
}

function mul(n, cb) {
  setTimeout(function () {
    const result = n * 2;
    cb(result); // sub(result)
  }, 700);
}

function sub(n, cb) {
  setTimeout(function () {
    const result = n - 1;
    cb(result);
  }, 500);
}

add(4, 3, function (result1) {
  console.log('add result:', result1);
  mul(result1, function (result2) {
    console.log('mul result:', result2);
    sub(result2, function (result3) {
      console.log('sub result:', result3);
    });
  });
});

// 2. 프로미스 체이닝이라면?
function addPromise(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mulPromise(n) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const result = n * 2;
      resolve(result);
    }, 700);
  });
}

function subPromise(n) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const result = n - 1;
      // resolve(result);
      reject('의도적으로 에러 일으킴!');
    }, 500);
  });
}

addPromise(4, 3)
  .then(function (result1) {
    console.log('add result:', result1);
    return mulPromise(result1); // return을 붙여주면 다음 함수로 넘어가 사용할 수 있다??
  })
  .then(function (result2) {
    console.log('mul result:', result2);
    return subPromise(result2);
  })
  .then(function (result3) {
    console.log('sub result:', result3);
  })
  .catch(function (error) {
    console.log(error);
  });
