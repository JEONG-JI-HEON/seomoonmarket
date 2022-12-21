const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const db = require('./../db.js');

/* 메인페이지 */
router.get('/', (req, res) => {
  db.getMainPage((rowNotice, rowSketchASC, rowSketchDESC) => {
    res.render('mainPage', {
      rowNotice: rowNotice,
      rowSketchASC: rowSketchASC,
      rowSketchDESC: rowSketchDESC
    });
  });
});

/* 공지사항페이지 */
router.get('/noticeMain', (req, res) => {
  db.getNotice((rows) => {
    res.render('noticeMain', {
      rows: rows
    });
  });
});

/* 공지사항작성페이지 */
router.get('/noticeWrite', (req, res) => {
  res.render('noticeWrite');
});

/* 공지사항 작성내용을 테이블에 넣기 */
router.post('/noticeWriteInfo', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let write_user = param['write_user'];
  let noticeCheck = param['noticeCheck'];
  let not_tit = param['not_tit'];
  let not_content = param['not_content'];

  db.insertNotice(write_user, not_tit, not_content, noticeCheck, () => {
    res.redirect('/noticeMain'); /* 공지사항페이지 */
  });
});

/* 공지사항 수정페이지 */
router.get('/noticeUpdate', (req, res) => {
  let id = req.query.id;
  db.getNoticeByid(id, (row) => {
    res.render('noticeUpdate', {
      row: row[0]
    })
  });
});

/* 공지사항 수정내용을 테이블에 넣기 */
router.post('/noticeUpdateInfo', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let id = param['id'];
  let write_user = param['write_user'];
  let not_tit = param['not_tit'];
  let not_content = param['not_content'];

  db.updateNotice(id, write_user, not_tit, not_content, () => {
    res.redirect('/noticeMain'); /* 공지사항페이지 */
  });
});

/* 공지사항 삭제할때 */
router.get('/noticeDelete', (req, res) => {
  let id = req.query.id;
  db.deleteNoticeByid(id, () => {
    res.redirect('/noticeMain'); /* 공지사항페이지 */
  });
});

/* 공지사항상세페이지 */
router.get('/noticeRead', (req, res) => {
  let id = req.query.id;
  db.getNoticeByid(id, (row) => {
    res.render('noticeRead', {
      row: row[0]
    })
  });
});



/* 로그인페이지 */
router.get('/login', (req, res) => {
  res.render('loginPage');
});

/* 로그인 내용 */
router.post('/logininfo', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let login_id = param['login_id'];
  let login_pw = param['login_pw'];
  db.loginCheck(login_id, login_pw, (results)=>{
    if (results.length > 0){
      console.log(results.length);
      res.send(`<script>alert("${login_id}님, 어서오세요."); document.location.href="/";</script>`)
    } else {
      res.send(`<script>alert("로그인 정보가 일치하지 않습니다."); document.location.href="/login";</script>`)
    }
  });
})

/* 회원가입페이지 */
router.get('/join', (req, res) => {
  db.useridData((rows)=>{
    res.render('joinPage', {
      rows: rows
    });
  })
});


/* 회원가입 내용을 테이블에 넣기 */
router.post('/joininfo', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let user_name = param['user_name'];
  let user_id = param['user_id'];
  let user_pw = param['user_pw'];
  let user_birth = param['user_birth'];
  let user_phoneNum = param['user_phoneNum'];
  db.insertUserInfo(user_name, user_id, user_pw, user_birth, user_phoneNum, ()=>{
    res.redirect('/login');
  });
  
})






/* 야시장소개페이지 */
router.get('/produce', (req, res) => {
  res.render('producePage');
});


// try {
//   fs.readFileSync('../public/uploads/'); /* 폴더가 있으면 사용, 터미널 기준 경로!! */
// } catch (err) {
//   console.log('폴더가 존재하지 않습니다.');
//   fs.mkdirSync('../public/uploads/'); /* 폴더가 없으면 생성, 터미널 기준 경로!! */
// };

const upload = multer({
  storage: multer.diskStorage({ /* 어디의 저장할건지 정의 */
    destination(req, file, done) {
      done(null, 'public/uploads/'); /* 터미널 기준 경로!! */
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); /* 파일의 확장자 */
      done(null, path.basename(file.originalname, ext) + Date.now() + ext); /* 파일명 + 날짜 + 확장자명 */
    }
  }),
  limits: {fileSize: 1024 * 1024 * 15}
})


/* 현장스케치페이지 */
router.get('/sketchMain', (req, res) => {
  db.getSketch((rows) => {
    res.render('sketchMain', {
      rows: rows
    });
  });
});

/* 현장스케치작성페이지 */
router.get('/sketchWrite', (req, res) => {
  res.render('sketchWrite');
});

/* 현장스케치 작성내용을 테이블에 넣기 */
router.post('/sketchWriteInfo', upload.single('ske_img'), (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let ske_img = 'uploads/' + req.file.filename;
  let write_user = param['write_user'];
  let ske_tit = param['ske_tit'];
  let ske_content = param['ske_content'];

  db.insertSketch(write_user, ske_tit, ske_content, ske_img,() => {
    res.redirect('/sketchMain'); /* 현장스케치페이지 */
  });
});

/* 현장스케치 수정페이지 */
router.get('/sketchUpdate', (req, res) => {
  let id = req.query.id;
  db.getSketchByid(id, (row) => {
    res.render('sketchUpdate', {
      row: row[0]
    })
  });
});


/* 현장스케치 수정내용을 테이블에 넣기 */
router.post('/sketchUpdateInfo', upload.single('ske_img'), (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let id = param['id'];
  let ske_img = 'uploads/' + req.file.filename;
  let write_user = param['write_user'];
  let ske_tit = param['ske_tit'];
  let ske_content = param['ske_content'];

  db.updateSketch(id, write_user, ske_tit, ske_content, ske_img,() => {
    res.redirect('/sketchMain'); /* 현장스케치페이지 */
  });
});

/* 현장스케치 삭제할때 */
router.get('/sketchDelete', (req, res) => {
  let id = req.query.id;
  db.deleteSketchByid(id, () => {
    res.redirect('/sketchMain'); /* 현장스케치페이지 */
  });
});

/* 현장스케치상세페이지 */
router.get('/sketchRead', (req, res) => {
  let id = req.query.id;
  db.getSketchByid(id, (row) => {
    res.render('sketchRead', {
      row: row[0]
    })
  });
});

module.exports = router;