const models = require('../models/index');
const User = models.User;

exports.main = (req, res) => {
  res.render('index');
};
