var express = require('express');
var router = express.Router();
var fs = require('fs');


router.post("/", (req, res) => {
  const file = req.body.text;
  const filename = req.body.filename;
  console.log(file);
  console.log(filename);
  const field = fs.writeFile(`routes/${filename}`,req.body.text, (err) => {
    if (err) return (err)
  })

  router.get('/', function(req, res, next) {
  res.download(`routes/${filename}`);
    console.log('server is running');
  });
});

module.exports = router;

