const Vistor = require('../model/Visitor');

// GET /
exports.main = (req, res) => {
  res.render('index');
};

// GET /visitor
exports.get_visitor = (req, res) => {
  // [Before]
  // console.log(Vistor.getVisitors()); // [{}, {}]
  // res.render('visitor', { data: Vistor.getVisitors() });

  // [After] Visitor에서 콜백으로 넘김
  Vistor.getVisitors((result) => {
    console.log('Cvisitor.js >', result);
    res.render('visitor.ejs', { data: result });
  });
};

// POST /visitor
exports.post_visitor = (req, res) => {
  console.log(req.body); // 값을 req.body로 넘기고, 콜백으로 받아온다.
  const { name, comment } = req.body;
  Vistor.postVisitor(req.body, (result) => {
    console.log(result);
    res.send({ id: result, name, comment });
  });
};
