const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models/User');
const crypto = require('crypto');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 라우터 분리
const indexRouter = require('./routes');
app.use('/', indexRouter);

app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
