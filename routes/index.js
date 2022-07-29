var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// fs.readFile('../routes/files/abcd.txt',(err,data) => {
//   if (err) throw err;
//   console.log(data);
// });
module.exports = router;
