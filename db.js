const {
  query
} = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'database-1.cdgtgmckehex.ap-northeast-1.rds.amazonaws.com',
  user: 'root',
  password: 'wjdgjs0397',
  database: 'seomoonmarket',
  multipleStatements: true
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// 메인페이지에 게시판 테이블 내용과 현장스케치 내용을 출력할때
function getMainPage(callback) {
  connection.query('SELECT * FROM marketnotice ORDER BY id DESC LIMIT 3;' + 'SELECT * FROM marketsketch ORDER BY id ASC LIMIT 7;' + 'SELECT * FROM marketsketch ORDER BY id DESC LIMIT 7;', (err, rows, fields) => {
    if (err) throw err;
    let rowNotice = rows[0];
    let rowSketchASC = rows[1];
    let rowSketchDESC = rows[2];
    callback(rowNotice, rowSketchASC, rowSketchDESC);
  });
};

// 게시판에 테이블 내용을 출력할때
function getNotice(callback) {
  connection.query('SELECT * FROM marketnotice ORDER BY id DESC', (err, rows, fields) => {
    if (err) throw err;
    callback(rows);
  });
};

// 게시판을 생성할때 (테이블에 내용을 넣기위함)
function insertNotice(write_user, not_tit, not_content, noticeCheck, callback) {
  connection.query(`INSERT INTO marketnotice(create_time, write_user, not_tit, not_content, noticeCheck) VALUES(NOW(), '${write_user}', '${not_tit}', '${not_content}', '${noticeCheck}')`, (err) => {
    if (err) throw err;
    callback();
  });
};


// 게시판의 수정할때 (테이블에 수정된내용을 넣기위함)
function updateNotice(id, write_user, not_tit, not_content, callback) {
  connection.query(`UPDATE marketnotice SET create_time=NOW(), write_user='${write_user}', not_tit='${not_tit}', not_content='${not_content}' WHERE id='${id}'`, (err) => {
    if (err) throw err;
    callback();
  });
};

// 게시판 중 id가 일치하는 데이터만 추출 (불러올때, 수정할때 필요)
function getNoticeByid(id, callback) {
  connection.query(`SELECT * FROM marketnotice WHERE id=${id};` + `UPDATE marketnotice SET view_cnt = view_cnt + 1 WHERE id = ${id};`, (err, rows) => {
    if (err) throw err;
    let getNoticeByid = rows[0];
    let viewCntPlus = rows[1];
    callback(getNoticeByid, viewCntPlus);
  });
};

// 게시판 중 id가 일치하는 데이터만 추출 (삭제할때 필요)
function deleteNoticeByid(id, callback) {
  connection.query(`DELETE FROM marketnotice WHERE id=${id}`, (err) => {
    if (err) throw err;
    callback();
  });
};



// 현장스케치에 테이블 내용을 출력할때
function getSketch(callback) {
  connection.query('SELECT * FROM marketsketch ORDER BY id DESC', (err, rows, fields) => {
    if (err) throw err;
    callback(rows);
  });
};

// 현장스케치을 생성할때 (테이블에 내용을 넣기위함)
function insertSketch(write_user, ske_tit, ske_content, ske_img, callback) {
  connection.query(`INSERT INTO marketsketch(create_time, write_user, ske_tit, ske_content, ske_img) VALUES(NOW(), '${write_user}', '${ske_tit}', '${ske_content}', '${ske_img}')`, (err) => {
    if (err) throw err;
    callback();
  });
};

// 현장스케치 수정할때 (테이블에 수정된내용을 넣기위함)
function updateSketch(id, write_user, ske_tit, ske_content, ske_img, callback) {
  connection.query(`UPDATE marketsketch SET create_time=NOW(), write_user='${write_user}', ske_tit='${ske_tit}', ske_content='${ske_content}', ske_img='${ske_img}' WHERE id='${id}'`, (err) => {
    if (err) throw err;
    callback();
  });
};

// 현장스케치 중 id가 일치하는 데이터만 추출 (불러올때, 수정할때 필요)
function getSketchByid(id, callback) {
  connection.query(`SELECT * FROM marketsketch WHERE id=${id};` + `UPDATE marketsketch SET view_cnt = view_cnt + 1 WHERE id = ${id};`, (err, rows) => {
    if (err) throw err;
    let getSketchByid = rows[0];
    let viewCntPlus = rows[1];
    callback(getSketchByid, viewCntPlus)
  });
};

// 현장스케치 중 id가 일치하는 데이터만 추출 (삭제할때 필요)
function deleteSketchByid(id, callback) {
  connection.query(`DELETE FROM marketsketch WHERE id=${id}`, (err) => {
    if (err) throw err;
    callback();
  });
};

// userinfo를 수정할때 (생성할때)
function insertUserInfo(user_name, user_id, user_pw, user_birth, user_phoneNum, callback) {
  connection.query(`INSERT INTO marketuserinfo(create_time, user_name, user_id, user_pw, user_birth, user_phoneNum) VALUES(NOW(), '${user_name}', '${user_id}', '${user_pw}', '${user_birth}', '${user_phoneNum}');`, (err, results, fields) => {
    if (err) throw err;
    callback();
  });
};

// 로그인정보와 테이블 정보를 비교하는 함수
function loginCheck(login_id, login_pw, callback) {
  connection.query(`SELECT * FROM marketuserinfo WHERE user_id='${login_id}' and user_pw='${login_pw}'`, (err, results) => {
    if (err) throw err;
    callback(results);
  })
}

// 로그인 페이지에서 테이블 정보를 가져오는 함수
function useridData(callback) {
  connection.query('SELECT * FROM marketuserinfo ORDER BY user_id DESC', (err, rows, fields) => {
    if (err) throw err;
    callback(rows);
  });
};



module.exports = {
  getMainPage,
  getNotice,
  insertNotice,
  updateNotice,
  getNoticeByid,
  deleteNoticeByid,
  getSketch,
  insertSketch,
  updateSketch,
  getSketchByid,
  deleteSketchByid,
  insertUserInfo,
  loginCheck,
  useridData
};