// 라우터 연결
const express = require('express');
const router = express.Router();
// controller 파일
const controller = require('../controller/Cuser');

// localhost:PORT/user => 기본 경로

// GET /user
router.get('/', controller.user);
module.exports = router;
