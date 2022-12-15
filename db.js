var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'seomoonmarket'
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// 메인페이지에 게시판 테이블 내용을 출력할때
function getMainPage(callback) {
  connection.query('SELECT * FROM marketnotice ORDER BY id DESC LIMIT 3', (err, rows, fields) => {
    if (err) throw err;
    callback(rows);
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
  connection.query(`INSERT INTO marketnotice(create_time, write_user, not_tit, not_content, noticeCheck) VALUES(NOW(), '${write_user}', '${not_tit}', '${not_content}', '${noticeCheck}')`,(err)=>{
    if(err) throw err;
    callback();
  });
};


// 게시판의 수정할때 (테이블에 수정된내용을 넣기위함)
function updateNotice(id, write_user, not_tit, not_content, callback){
  connection.query(`UPDATE marketnotice SET create_time=NOW(), write_user='${write_user}', not_tit='${not_tit}', not_content='${not_content}' WHERE id='${id}'`, (err)=>{
    if(err) throw err;
    callback();
  });
};

// 게시판 중 id가 일치하는 데이터만 추출 (불러올때, 수정할때 필요)
function getNoticeByid(id, callback){
  connection.query(`SELECT * FROM marketnotice WHERE id=${id}`, (err, row)=>{
    if(err) throw err;
    callback(row);
  });
};

// 게시판 중 id가 일치하는 데이터만 추출 (삭제할때 필요)
function deleteNoticeByid(id, callback){
  connection.query(`DELETE FROM marketnotice WHERE id=${id}`,(err)=>{
    if(err) throw err;
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
  connection.query(`INSERT INTO marketsketch(create_time, write_user, ske_tit, ske_content, ske_img) VALUES(NOW(), '${write_user}', '${ske_tit}', '${ske_content}', '${ske_img}')`,(err)=>{
    if(err) throw err;
    callback();
  });
};

// 현장스케치 수정할때 (테이블에 수정된내용을 넣기위함)
function updateSketch(id, write_user, ske_tit, ske_content, ske_img, callback){
  connection.query(`UPDATE marketsketch SET create_time=NOW(), write_user='${write_user}', ske_tit='${ske_tit}', ske_content='${ske_content}', ske_img='${ske_img}' WHERE id='${id}'`, (err)=>{
    if(err) throw err;
    callback();
  });
};

// 현장스케치 중 id가 일치하는 데이터만 추출 (불러올때, 수정할때 필요)
function getSketchByid(id, callback){
  connection.query(`SELECT * FROM marketsketch WHERE id=${id}`, (err, row)=>{
    if(err) throw err;
    callback(row);
  });
};

// 현장스케치 중 id가 일치하는 데이터만 추출 (삭제할때 필요)
function deleteSketchByid(id, callback){
  connection.query(`DELETE FROM marketsketch WHERE id=${id}`,(err)=>{
    if(err) throw err;
    callback();
  });
};

module.exports = {
  getMainPage,getNotice,insertNotice,updateNotice,getNoticeByid,deleteNoticeByid,getSketch,insertSketch,updateSketch,getSketchByid,deleteSketchByid
};