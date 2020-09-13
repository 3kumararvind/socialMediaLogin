var express = require('express');
var app = express();

//setting ejs view engine
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get('/', function (req, res) {
  res.render('crud');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
