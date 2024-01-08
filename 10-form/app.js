const express = require('express');
const app = express();
const PORT = 8000;

// 1. 사용할 엔진 등록
// 2. 폴더 생성 (폴더명 적고 실제 폴더 만들기)
app.set('view engine', 'ejs');
app.set('views', './views'); // view 템플릿 파일을 찾을 때 사용할 디렉토리 지정, 디폴트값이 views라는 폴더라 가급적 views를 사용(기본값 사용하면 생략 가능)

// 미들웨어 등록

// req.body 객체를 해석할 수 있도록 body-parser 미들웨어 등록
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱, HTML form -> body
// extended는 urlencoded 메서드의 옵션
app.use(express.json()); // json 형식으로 데이터를 주고 받음, REST API -> body

app.get('/', (req, res) => {
  // views 폴더 내부에 index라는 ejs 파일을 보여줌
  res.render('index');
});

// get 실습
app.get('/', (req, res) => {
  // views 폴더 내부에 index라는 ejs 파일을 보여줌
  res.render('practice1');
});

// GET '/login' 요청이 들어오면 임의의 메시지를 전송한다.
// get 방식은 클라이언트에서 보낸 데이터가 req.query에 저장
app.get('/login', (req, res) => {
  console.log(req.query); // { id: 'apple', pw: '1234' }
  // res.send('get 요청 성공!');

  res.render('result', { title: 'Get 요청', userInfo: req.query });
});

// POST '/login' 요청이 들어오면 임의의 메시지 전송
// post 방식은 클라이언트에서 보낸 데이터가 req.boay에 저장
app.post('/login', (req, res) => {
  console.log(req.body); // { id: 'banana', pw: '1234' }
  // res.send('post 요청 성공!');
  res.render('result', { title: 'Post 요청', userInfo: req.body });
});

// post 실습
app.post('/login', (req, res) => {
  console.log(req.body); // { id: 'banana', pw: '1234' }
  // res.send('post 요청 성공!');
  res.render('prResult', { title: 'Post 요청', userName: req.body });
});

app.post('/js-form-check', (req, res) => {
  console.log(req.body);
  res.send('js validation 성공');
});

// 여기까지 하고 view 폴더에 index.ejs 파일 만들기
//  -> app.get으로 ejs파일 렌더

app.listen(PORT, () => {
  console.log(`${PORT}가 열렸다!`);
});
