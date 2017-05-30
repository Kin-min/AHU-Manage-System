// sql语句
var sqlMap = {
	// 用户
	user: {
		add: 'insert into match_info (match_ID,match_Name, sign_Start_Time, sign_End_Time, match_Start_Time, match_End_Time, particular_Information) values (?,?,?,?,?,?,?)',
        query:'select * from match_info',
		//  (match_ID,match_Name,match_Status,sign_Start_Time,sign_End_Time,match_Start_Time,match_End_Time,sign_Number,grade)
		del:'delete from match_info where match_ID = ?',
		queryM:'select * from match_info where match_ID = ?'
	}
}
module.exports = sqlMap;