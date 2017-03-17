// Express Function
module.exports = function (express) {
  // Router
  var router = express.Router();
  var path = require("path");

  // Header
  router.post('/urls', function (req, res) {
    var origURL = req.body.originalUrl;

// Source String
    var sourceString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz23456789';
    var totalChars = 6;

// Blank String
    var builtURL = '';

    for (var i = 0; i < totalChars; i++) {
      
// Random Characters
      builtURL += sourceString.charAt(Math.random() * sourceString.length);
    }

// Response Return
    var urlPkg = {
      origURL: origURL,
      shortURL: builtURL,
    };

    res.json(urlPkg);
  });

return router;
}
