function callPromise(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function backPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // const result = 'back';
      resolve('back');
      console.log('back');
    }, 1000);
  });
}

function hellPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = 'callback hell';
      // 굳이 변수를 만들어 담을 필요없이 바로 resolve에 값을 전달할 수 있다.
      // back 코드랑 비교 확인
      resolve(result);
    }, 1000);
  });
}

// call('kim')
//   .then(function (name) {
//     console.log(name + '반가워');
//     return back();
//   })
//   .then(function (txt) {
//     console.log(`${txt}을 실행했구나`);
//     return hell();
//   })
//   .then(function (messaage) {
//     console.log('여기는' + messaage);
//   });

async function exec() {
  const name = await callPromise('kim');
  console.log(`${name} 반가워`);
  const txt = await backPromise();
  console.log(`${txt}을 실행했구나`);
  const message = await hellPromise();
  console.log(message);
}

exec();
