// 유저에 대한 처리
const User = require('../model/User');

exports.user = (req, res) => {
  res.render('user', { userInfo: User.userInfo() });
};
