const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const db = require('./../db.js');

router.get('/', (req, res) => {
  res.render('mainPage');
});

module.exports = router;