var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();
var jsonWrite = function(res, ret) {
	if(typeof ret === 'undefined') {
		res.json({
			code: '1',
			msg: '操作失败'
		});
	} else {
		res.json(ret);
	}
};
// 增加用户接口
// router.post('/addUser', (req, res) => {
// 	var sql = $sql.user.add;
// 	var params = req.body;
// 	console.log(params);
// 	conn.query(sql, [params.match_ID,params.match_Name, params.match_Number], function(err, result) {
// 		if (err) {
// 			console.log(err);
// 		}
// 		if (result) {
// 			jsonWrite(res, result);
            
// 		}
// 	})
// });
router.get('/queryUser', (req, res) => {
	var sql = $sql.user.query;
	var params = req.body;
	console.log(params);
	conn.query(sql, function(err, result) {
		if (err) {
			console.log(err);
		}
		if (result) {
			console.log(result);
            res.json(result);
            
		}
	})
});
router.post('/delMatch', (req, res) => {
	var sql = $sql.user.del;
	var params = req.body;
	console.log(params);
	conn.query(sql, [params.match_ID], function(err, result) {
		if (err) {
			console.log(err);
		}
		if (result) {
			jsonWrite(res, result); 
		}
	})
});
router.post('/addMatch', (req, res) => {
	var sql = $sql.user.add;
	var params = req.body;
	console.log(params);
	conn.query(sql, [params.match_ID,params.match_Name, params.sign_Start_Time, params.sign_End_Time, params.match_Start_Time, params.match_End_Time, params.particular_Information], function(err, result) {
		if (err) {
			console.log(err);
		}
		if (result) {
			jsonWrite(res, result);
            
		}
	})
});
router.post('/queryMatch', (req, res) => {
	var sql = $sql.user.queryM;
	var params = req.body;
	console.log(params);
	conn.query(sql, [params.match_ID], function(err, result) {
		if (err) {
			console.log(err);
		}
		if (result) {
			jsonWrite(res, result);
            
		}
	})
});
module.exports = router;