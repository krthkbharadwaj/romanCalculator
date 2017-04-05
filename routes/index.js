var express = require('express');
var router = express.Router();
var calc = require('./calculate');

/* default page */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mathematical operations with Roman numbers' });
});

/**Used for equation creator url, render the same page with result */
router.post('/calc', function (req, res, next) {
  res.render('index', { title: 'Mathematical operations with roman numerals', result: calc.equation(req.body.first, req.body.second, req.body.third) });
});

module.exports = router;
