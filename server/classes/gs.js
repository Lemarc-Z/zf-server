var { query } = require("../../mysql/util/db");
var basis = require("../classes/basis");

class gs extends basis {
  // insertOne(value) {
  //   // 获取请求提交的数据
  //
  //   let sql = "INSERT INTO np set ?";
  //   query(sql, value);
  //   console.log(`np +1 `);
  // }
  //
  // findAll() {
  //   let sql = "SELECT * FROM np";
  //   query(sql).then(function(results) {
  //     console.log(`- results ${JSON.stringify(results, null, 4)}`);
  //   });
  // }
  //
  // async findAllMonthly(year, month) {
  //   let sql =
  //     "SELECT * FROM np WHERE YEAR(date)=? && MONTH(date)=? ORDER BY date";
  //   let val = [`${year}`, `${month}`];
  //   let rows = await query(sql, val).then(function(results) {
  //     return results;
  //   });
  //   return rows;
  // }
}

module.exports = np;
