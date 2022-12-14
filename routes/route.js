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

/* 공지사항작성페이지 */
router.get('/noticeWrite', (req, res) => {
  res.render('noticeWrite');
});

/* 공지사항상세페이지 */
router.get('/noticeRead', (req, res) => {
  res.render('noticeRead');
});

/* 로그인페이지 */
router.get('/login', (req, res) => {
  res.render('loginPage');
});

/* 회원가입페이지 */
router.get('/join', (req, res) => {
  res.render('joinPage');
});

/* 야시장소개페이지 */
router.get('/produce', (req, res) => {
  res.render('producePage');
});



module.exports = router;