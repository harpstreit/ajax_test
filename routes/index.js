exports.index = function(req, res) {
  res.render('index', { title: 'Crystal\'s test of truth' });
};

exports.api = require('./api.js');
