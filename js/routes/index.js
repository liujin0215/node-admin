var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.json({
        1: '中文测试',
    });
});

module.exports = router;
