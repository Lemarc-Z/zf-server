const { query } = require("../../mysql/util/db");

class others {
  insertOne(value) {
    // 获取请求提交的数据

    let sql = "INSERT INTO others set ?";
    query(sql, value);
  }

  findAll() {
    let sql = "SELECT * FROM others";
    query(sql).then(function(results) {
      console.log(`- results ${JSON.stringify(results)}`);
    });
  }

  async findAllMonthly(year, month) {
    let sql =
      "SELECT * FROM others WHERE YEAR(date)=? && MONTH(date)=? ORDER BY date";
    let val = [`${year}`, `${month}`];
    let rows = await query(sql, val).then(function(results) {
      return results;
    });
    return rows;
  }
}

module.exports = new others();
