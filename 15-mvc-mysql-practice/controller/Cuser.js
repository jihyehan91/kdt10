const User = require('../model/User');

exports.main = (req, res) => {
  res.render('index');
};

// 회원가입
exports.get_signup = (req, res) => {
  res.render('signup');
};

// 로그인
exports.get_signin = (req, res) => {
  res.render('signin');
};

// 회원가입 요청
exports.post_signup = (req, res) => {
  // 뷰(요청) -> 라우터 -> 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> 뷰(응답)
  console.log('post_signup >', req.body);

  User.post_signup(req.body, (result) => {
    // result: rows
    res.send(result);
  });
};

// 로그인 요청
exports.post_signin = (req, res) => {
  console.log(req.body);
  User.post_signin(req.body, (result) => {
    // result: rows
    if (result.length > 0) res.send({ isLogin: true, userInfo: result[0] });
    else res.send({ isLogin: false });
  });
};

// 회원 정보 수정 페이지 요청
exports.post_profile = (req, res) => {
  console.log(req.body); // {userid: ~}
  User.post_profile(req.body.userid, (result) => {
    // res.send(result);
    // result: rows [{}]

    // 로그인 성공 -> profile.ejs 렌더(화면에 띄우려고)
    if (result.length > 0) res.render('profile', { data: result[0] });
  });
};

// 회원정보 수정 요청
exports.edit_profile = (req, res) => {
  console.log(req.body);
  User.edit_profile(req.body, (result) => {
    res.send('회원정보 수정 성공!');
  });
};

// 회원 탈퇴 요청
exports.delete_profile = (req, res) => {
  console.log(req.body); // {id: ~}
  User.delete_profile(req.body.id, (result) => {
    res.send({ deletedId: req.body.id });
  });
};
