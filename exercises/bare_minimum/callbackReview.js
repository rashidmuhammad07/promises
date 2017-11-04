/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
  // TODO
  fs.readFile(filePath, 'utf8', function (err, content) {
    if (err) {
      cb(err);
    } else {
      cb(err, content.slice(0, content.indexOf('\n')));
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, cb) {
  request({
    method: 'GET', 
    url: url
  }, function (err, res, body) {
    if (err) {
      cb(err);
    } else {
      cb(err, res.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
