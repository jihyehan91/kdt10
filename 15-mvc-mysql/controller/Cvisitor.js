const Visitor = require('../model/Visitor');

// GET /
exports.main = (req, res) => {
  res.render('index');
};

// GET /visitor
exports.get_visitors = (req, res) => {
  // [Before]
  // console.log(Vistor.getVisitors()); // [{}, {}]
  // res.render('visitor', { data: Vistor.getVisitors() });

  // [After] Visitor에서 콜백으로 넘김
  // 데이터 이동 순서)
  // 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> (프론트로) 응답
  // 콜백함수를 써준 이유 -> 비동기 처리를 하기 위해서
  // -> 모델에서 데이터베이스 값을 가져오는 것도 기다려야하고
  // -> 값을 받아온 후 컨트롤러가 순차적으로 실행되어야 해서
  // 1) visitor.getVisitors()
  // 2) 모델에서 데이터값을 받은 후에 콜백 함수 실행
  Visitor.getVisitors((result) => {
    // 모델의 rows를 result라는 변수명으로 받음
    console.log('Cvisitor.js >', result);
    res.render('visitor.ejs', { data: result });
  });
};

// POST /visitor
exports.post_visitor = (req, res) => {
  console.log(req.body); // 값을 req.body로 넘기고, 콜백으로 받아온다.
  const { name, comment } = req.body;
  // post, get 요청 시 컨트롤러에서 모델에 필요한 값을 넘겨줘야 하는 경우가 있다.
  // Visitor.postitVisitor(view에서 받아온 데이터, 콜백 함수) 호춢
  Visitor.postVisitor(req.body, (result) => {
    // result: row.inserId => ex) 3
    // DB에 새로 생긴 Id값을 Id라는 키값으로 넘겨줌
    console.log(result);
    res.send({ id: result, name, comment });
  });
};

// GET /visitor => localhost:PORT/visitor?id=N
// 1. 수정하려고 데이터 불러오기 - req.query로
exports.get_visitor = (req, res) => {
  console.log(req.query);
  console.log(req.query.id);

  // 모델에 함수 호출
  Visitor.getVisitor(req.query.id, (result) => {
    // result: rows[0] -> { id:1, name: '홍길동', comment: '내가 왔다' }
    console.log('get_visitor Cvisitor.js >', result);
    res.send(result);
  });
};

// GET /visitor => localhost:PORT/visitor/:id
// 2. 수정하려고 데이터 불러오기 - req.params로
exports.get_visitor2 = (req, res) => {
  console.log(req.params);
  console.log(req.params.id);

  // 모델에 함수 호출
  Visitor.getVisitor(req.params.id, (result) => {
    // result: rows[0] -> { id:1, name: '홍길동', comment: '내가 왔다' }
    console.log('get_visitor Cvisitor.js >', result);
    res.send(result);
  });
};

// PATCH /visitor
exports.patch_visitor = (req, res) => {
  console.log(req.body);

  Visitor.patchVisitor(req.body, (result) => {
    console.log('patchVisitor Cvisitor.js', result);
    res.send('수정 성공!');
  });
};

// DELETE /visitor
exports.delete_visitor = (req, res) => {
  console.log('req.body', req.body);
  console.log('req.body.id', req.body.id);

  Visitor.deleteVisitor(req.body.id, (result) => {
    console.log('deleteVisitor Cvisitor.js >', result);
    res.send('삭제 성공!');
  });
};
