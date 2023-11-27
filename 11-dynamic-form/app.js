const { render } = require('ejs');
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

// 실습1
app.get('/practice1', (req, res) => {
  res.render('practice1');
});

// 실습2
app.get('/practice2', (req, res) => {
  res.render('practice2');
});

app.get('/ajax', (req, res) => {
  // 서버에서 값을 받아옴(응답)
  console.log(req.query);
  res.send(req.query);
});

app.post('/ajax', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// axios
app.get('/axios', (req, res) => {
  console.log(req.query);
  res.send(req.query);

  // 의도적으로 에러 발생
  // res.status(400).send('error msg!');
});

// 실습1
app.get('/axios1', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// 실습2
const userId = '홍길동';
const userPw = '1234';

app.post('/axios2', (req, res) => {
  console.log(req.body); //서버로 보낸 데이터 확인
  // 데이터 확인용 -> {id: '홍길동', pw: '1234'}

  // userId, userPw라는 변수 값과 클라이언트에서 넘겨받은 값이 일치하는지 검사
  // 결괏값을 반환
  if (userId === req.body.id && userPw === req.body.ps) {
    res.send({ userInfo: req.body, isSucess: true });
  } else {
    res.send({ isSucess: false });
  }
});

// fetch
app.get('/fetch', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post('/fetch', (req, res) => {
  console.log(req.body);
  res.send({
    name: req.body.name,
    gender: req.body.gender,
    msg: 'fetch 성공!',
  });
});

app.listen(PORT, () => {
  console.log(`server is opening ${PORT}`);
});
