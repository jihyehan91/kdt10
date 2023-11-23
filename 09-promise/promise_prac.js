function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // const result = 'back';
      resolve('back');
      console.log('back');
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = 'callback hell';
      // 굳이 변수를 만들어 담을 필요없이 바로 resolve에 값을 전달할 수 있다.
      // back 코드랑 비교 확인
      resolve(result);
    }, 1000);
  });
}

// 내 코드
// call('kim')
//   .then(function (result1) {
//     // resolve에 담긴 변수값은 then으로 전달(변수명은 상관없다. 변수값이 전달된다는 점이 중요!)
//     console.log(result1 + '반가워');
//     return back(result1);
//   })
//   .then(function (result2) {
//     console.log(result2 + '을 실행했구나');
//     return hell(result2);
//   })
//   .then(function (result3) {
//     console.log('여기는' + result3);
//   });

// 함수 호출
call('kim')
  .then(function (name) {
    // resolve에 담긴 변수값은 then으로 전달(변수명은 상관없다. 변수값이 전달된다는 점이 중요!)
    console.log(name + '반가워');
    return back();
  })
  .then(function (txt) {
    console.log(`${txt}을 실행했구나`);
    return hell();
  })
  .then(function (messaage) {
    console.log('여기는' + messaage);
  });

// 화살표 함수 버전
// call('kim')
//   .then((name) => {
//     // resolve에 담긴 변수값은 then으로 전달(변수명은 상관없다. 변수값이 전달된다는 점이 중요!)
//     console.log(name + '반가워');
//     return back();
//   })
//   .then((txt) => {
//     console.log(`${txt}을 실행했구나`);
//     return hell();
//   })
//   .then((messaage) => {
//     console.log('여기는' + messaage);
//   });
