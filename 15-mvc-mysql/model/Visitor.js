// exports.getVisitor = () => {
//   return [
//     {id: 1, name: '홍길동', comment: '내가 왔다.'},
//     {id: 2, name: '이찬혁', comment: '으라차차',},
//   ];
// };

// -----mysql 연결 -----
const mysql = require('mysql2');

// DB 연결
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'kdt',
});

// 데이터베이스에 접근하는 쿼리문 작성 (모델의 DB에 쿼리를 날림)
exports.getVisitors = (cb) => {
  // query(sql, values?, 콜백함수) 쿼리메서드는 2개의 인자를 받음(valuses는 있어도 되고 없어도 되고)
  conn.query(`SELECT * FROM visitor`, (err, rows) => {
    // DB 데이터 가져온 후 실행
    if (err) throw err;

    console.log('Visitor.js >', rows);
    /*
      Cvisitor.js > [
        { id: 1, name: '홍길동', comment: '내가 왔다.' },
        { id: 2, name: '이찬혁', comment: '으라차차' }
      ]
    */
    cb(rows); // 컨트롤러로 결괏값을 넘겨줌
  });
};

exports.postVisitor = (data, cb) => {
  // data: req.body
  // cb: 콜백함수 - 컨트롤러에게 모델에서 DB와 통신이 끝난지 알려주려고
  console.log('postVisitor >', data);

  /**
   * Prepared Statments
   * SQL 쿼리에서 사용자 입력을 안전하게 처리하고  SQL 인젝션 공격을 방지하기 위한 방법
   * 입력데이터를 직접 문자열로 쿼리에 삽입하는 대신,
   * 플레이스 홀더를 사용하여 쿼리 작성
   * mysql에서는 ? (물음표) 사용
   */
  const sql = `INSERT INTO visitor (name, comment) VALUES (? , ?)`;
  const values = [data.name, data.comment];
  conn.query(sql, values, (err, rows) => {
    if (err) throw err;
    console.log('Visitor.js', rows);
    /* ResultSetHeader {
        fieldCount: 0,
        affectedRows: 1,
        insertId: 3,
        inof: '',
        serverStatus: 2,
        warningStatus: 0,
        changedRows: 0
      }
    */
    cb(rows.insertId); // 콜백함수 호출, 매개변수로 3이라는 값
  });
};

exports.getVisitor = (id, cb) => {
  // id 컬럼 값이 특정한 값과 일치하는 행들을 선택하는 역할
  // get_visitor 함수에서 보낸 req.query.id와 일치하는 id를 특정함
  const sql = 'SELECT * FROM visitor WHERE id=?';
  conn.query(sql, [id], (err, rows) => {
    if (err) throw err;

    console.log('getVisitor Visitor.js >', rows);
    // [ { id: 1, name: '홍길동', comment: '내가 왔다.' } ]
    cb(rows[0]);
  });
};

exports.patchVisitor = (data, cb) => {
  const sql = 'UPDATE visitor SET name = ?, comment =? WHERE id = ?';
  const values = [data.name, data.comment, data.id];
  conn.query(sql, values, (err, rows) => {
    if (err) throw err;

    console.log('patchVisitor Visitor.js >', rows);
    /**
    patchVisitor Visitor.js > ResultSetHeader {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: 'Rows matched: 1  Changed: 1  Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 1
  }
     */
    cb(rows);
  });
};

exports.deleteVisitor = (id, cb) => {
  console.log(id);
  const sql = 'DELETE FROM visitor WHERE id =? ';
  conn.query(sql, [id], (err, rows) => {
    if (err) throw err;
    console.log('deleteVisitor Visitor.js >', rows);
    /*
    deleteVisitor Visitor.js > ResultSetHeader {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: '',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 0
  }
    */
    cb(rows);
  });
};
