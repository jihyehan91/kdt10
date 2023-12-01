// 모델 연결
const Practice = require('../model/Practice');

exports.main = (req, res) => {
  res.render('practice');
};

// 이 부분 다시 보기...

exports.login = (req, res) => {
  console.log(req.body);
  // 값이 잘 들어오는지 확인
  // {userId: 'test', userPw: '1234'} -> model에서 db비교
  const userData = Practice.getUserInfo();
  // **모델에서 넘겨받은 값을 쓰려면 변수에 담아야 입력 값과 저장된 값을 비교할 수 있다.
  console.log(Practice.getUserInfo());
  // { realId: '홍길동', realPw: '1234' }
  // 모델에서 받아온 값

  // userId, userPw 라는 변수 값과 클라이언트에서 넘겨받은 값이 일치하는지 검사
  if (
    userData.realId === req.body.userId &&
    userData.realPw === req.body.userPw
  ) {
    // 클라로 데이터 응답 res.send();
    res.send({ isSuccess: true, userId: userData.realId });
  } else {
    res.send({ isSuccess: false });
  }
  // 결과 값을 반환
};
