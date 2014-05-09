exports.index = function(req, res) {
  res.render('index', { title: 'ajax test of truth' });
};

exports.api = require('./api.js');
