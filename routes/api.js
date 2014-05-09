var fs = require('fs');
var cats = fs.readFileSync('cats/cats.json');

exports.catsIndex = function(req, res) {
  res.setHeader('Content-type', 'application/json');
  res.send(cats);
};

exports.catsShow = function(req, res) {
  res.setHeader('Content-type', 'application/json');
  res.end(fs.readFileSync('cats/' + req.params.id + '.json'));
};
