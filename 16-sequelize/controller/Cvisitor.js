// [After]
// models: models/index에서 export한 db 객체
const models = require('../models/index');
const Visitor = models.Visitor;

// GET /
exports.main = (req, res) => {
  res.render('index');
};

// GET /visitor
exports.get_visitors = (req, res) => {
  // [Befor]
  // Visitor.getVisitors((result) => {
  //   // 모델의 rows를 result라는 변수명으로 받음
  //   console.log('Cvisitor.js >', result);
  //   res.render('visitor.ejs', { data: result });
  // });

  // [After] 실제로 쿼리를 날리는 부분
  // SELECT * FROM visitor
  Visitor.findAll().then((result) => {
    console.log('findAll >', result); // [{}, {}, ...]
    res.render('visitor.ejs', { data: result });
  });
};

// POST /visitor
exports.post_visitor = (req, res) => {
  console.log(req.body);
  const { name, comment } = req.body;
  // [Before]
  // Visitor.postVisitor(req.body, (result) => {
  //   console.log(result);
  //   res.send({ id: result, name, comment });
  // });

  // [After]
  // 'INSERT INTO visitor (name, comment) VALUES (?, ?)'
  Visitor.create({
    name: name,
    comment: comment,
  }).then((result) => {
    console.log('create >', result);
    res.send(result); //
  });
};

// GET /visitor => localhost:PORT/visitor?id=N
// 1. 수정하려고 데이터 불러오기 - req.query로
exports.get_visitor = (req, res) => {
  console.log(req.query);
  console.log(req.query.id);

  // [Before]
  // Visitor.getVisitor(req.query.id, (result) => {
  //   // result: rows[0] -> { id:1, name: '홍길동', comment: '내가 왔다' }
  //   console.log('get_visitor Cvisitor.js >', result);
  //   res.send(result);
  // });

  // [After]
  // SELECT * FROM visitor wHERE id = ?
  Visitor.findOne({
    where: { id: req.query.id },
  }).then((result) => {
    console.log('findOne >', result);
    res.send(result);
  });
};

// GET /visitor => localhost:PORT/visitor/:id
// 2. 수정하려고 데이터 불러오기 - req.params로
exports.get_visitor2 = (req, res) => {
  // console.log(req.params);
  // console.log(req.params.id);

  // // 모델에 함수 호출
  // Visitor.getVisitor(req.params.id, (result) => {
  //   // result: rows[0] -> { id:1, name: '홍길동', comment: '내가 왔다' }
  //   console.log('get_visitor Cvisitor.js >', result);
  //   res.send(result);
  // });
  Visitor.findOne({
    where: { id: req.params.id },
  }).then((result) => {
    console.log('findOne >', result);
    res.send(result);
  });
};

// PATCH /visitor
exports.patch_visitor = (req, res) => {
  console.log(req.body);
  // [Before]
  // Visitor.patchVisitor(req.body, (result) => {
  //   console.log('patchVisitor Cvisitor.js', result);
  //   res.send('수정 성공!');
  // });

  // [After]
  // UPDATE visitor SET name = ?, comment =? WHERE id = ?
  Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then((result) => {
    console.log('update >', result); // [1] 하나가 바뀌었다.
    res.send('수정 성공!');
  });
};

// DELETE /visitor
exports.delete_visitor = (req, res) => {
  console.log('req.body', req.body);
  console.log('req.body.id', req.body.id);

  // [Before]
  // Visitor.deleteVisitor(req.body.id, (result) => {
  //   console.log('deleteVisitor Cvisitor.js >', result);
  //   res.send('삭제 성공!');
  // });

  // [After]
  // DELETE FROM visitor WHERE id =?
  Visitor.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    console.log('destroy >', result); // 1
    res.send('삭제 성공!');
  });
};
