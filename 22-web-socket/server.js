const express = require('express');
const ws = require('ws');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('client');
});

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// express 서버와 웹 소켓 서버를 연결(같은 포트를 공유)
const wsServer = new ws.Server({ server: server });

const sockets = []; // 클라이언트 소켓들을 저장할 배열

wsServer.on('connection', (socket) => {
  console.log('[클라이언트 연결 완료]');
  sockets.push(socket); // 배열에 접속한 클라이언트 객체 추가

  // 클라이언트의 메시지 수신
  socket.on('message', (message) => {
    console.log('클라이언트로부터 받은 메시지 >', message);

    // 웹 소켓 서버에 접속한 모든 클라이언트에게 메시지를 전송
    // = 브로드캐스팅 (여러 컴퓨터한테 데이터 전송)
    sockets.forEach((socket) => {
      // 여러 탭 말고 하나의 탭에만 내용 추가를 원할 경우 forEach 없이 아래 코드만 작성
      socket.send(`${message}`);
    });
  });

  socket.on('error', (error) => {
    console.log('에러 발생 >', error);
  });

  socket.on('close', (error) => {
    console.log('[클라이언트 연결 종료]');
  });
});
