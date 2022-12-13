const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const db = require('./../db.js');

/* 메인페이지 */
router.get('/', (req, res) => {
  res.render('mainPage');
});

/* 공지사항페이지 */
router.get('/noticeMain', (req, res) => {
  res.render('noticeMain');
});



module.exports = router;