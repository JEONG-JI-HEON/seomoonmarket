let app = require('../app');
let port = 8000;

app.listen(process.env.port || port);