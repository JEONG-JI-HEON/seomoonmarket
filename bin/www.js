let app = require('../app');
// let PORT = 5000;

// app.listen(process.env.PORT || PORT);

let PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
  console.log(`${PORT}번 포트로 express 실행`);
  console.log(`server started http://localhost:${PORT}/`);
});