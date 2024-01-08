// [After] Model 연결
const Comment = require('../model/Comment');

// [Before] Model 연결 전
// (임시) DB로부터 받아온 데이터 댓글 목록
const comments = [
  {
    id: 1,
    userid: 'helloworld',
    date: '2022-10-31',
    comment: '안녕하세요',
  },
  {
    id: 2,
    userid: 'hell',
    date: '2022-10-31',
    comment: '안녕하세요',
  },
  {
    id: 3,
    userid: 'apple',
    date: '2023-10-31',
    comment: '오 신기하다',
  },
  {
    id: 4,
    userid: 'best',
    date: '2023-4-31',
    comment: '댓글 적기',
  },
];

// GET /
exports.main = (req, res) => {
  res.render('index');
};
// 라우터에 있던 함수를 연결지어 컨트롤러로 이동시킴

// GET /comments
exports.comments = (req, res) => {
  console.log(Comment.commentInfos()); // [{}, {}, {}, {}]
  res.render('comments', { commentInfos: Comment.commentInfos() });
  // commetInfos 키값으로 배열을 객체로 담아서 프론트에 보내줌
};

// GET /comment/:id
exports.comment = (req, res) => {
  // req.query: /comment?id=1
  console.log(req.params); // {id: '1'}: 라우트 매개변수에 대한 정보가 담겨 있음
  console.log('id >', req.params.id);

  const comments = Comment.commentInfos(); // model 연결 후 추가
  const commentId = req.params.id; // 댓글 id: url로 들어온 매개변수
  console.log('comments[commentId - 1]', comments[commentId - 1]);

  // 존재하지 않는 댓글 id접속 시 404페이지
  if (commentId < 1 || commentId > comments.length) {
    return res.render('404');
  }

  console.log(typeof commentId);

  // :id 변수에 숫자가 아닌 값이 온다면 404 페이지
  if (isNaN(commentId)) {
    return res.render('404');
  }

  res.render('comment', { commentInfo: comments[commentId - 1] });
  // comment파일로 보내줌 > 객체를 commentInfo 키값으로 넘겨줌
};
