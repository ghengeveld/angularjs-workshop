var coders = require('./coders.json');

// Show all coders.
exports.coders = function(req, res, next) {
    coders.forEach(function(coder) {
      if (typeof coder.votes === 'undefined') {
        coder.votes = 0;
      }
    });
    res.send(200, JSON.stringify(coders));
};

// Show a coder issue by id.
exports.coder = function(req, res, next) {

  coders.forEach(function(coder) {
    if (coder.id === req.param('id')) {
      res.send(200, JSON.stringify(coder));
      return;
    }
  });

  res.send(404);
};

// Remove a coder by id.
exports.removeCoder = function(req, res, next) {

  coders = coders.filter(function(coder) {
    return coder.id !== Number(req.param('id'));
  });

  res.send(200);
};

// Vote function for ngResource
exports.ngResourceVote = function(req, res, next) {

  coders.forEach(function(coder) {

    if (coder.id === Number(req.param('id'))) {
      coder.votes = Number(req.param('votes'));
      res.send(200, JSON.stringify(coder));
      return;
    }
  });

  res.send(404);
};

// Vote function for $http
exports.httpVote = function(req, res, next) {

  coders.forEach(function(coder) {

    if (coder.id === Number(req.param('id'))) {
      coder.votes += 1;
      res.send(200, JSON.stringify(coder));
      return;
    }
  });

  res.send(404);
};
