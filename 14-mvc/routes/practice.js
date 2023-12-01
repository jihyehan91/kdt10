// 라우터 연결
const express = require('express');
const router = express.Router();
// controller 파일
const controller = require('../controller/Cpractice');

// GET /practice
router.get('/', controller.main);

// POST /pracrice/login
router.post('/login', controller.login);

module.exports = router;
