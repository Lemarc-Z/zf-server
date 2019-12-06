const { query } = require("../../mysql/util/db");

class np {
  insertOne(value) {
    // 获取请求提交的数据

    let sql = "INSERT INTO np set ?";
    query(sql, value);
    console.log(`np +1 `);
  }

  findAll() {
    let sql = "SELECT * FROM np";
    query(sql).then(function(results) {
      console.log(`- results ${JSON.stringify(results, null, 4)}`);
    });
  }

  findAllMonthly(year, month) {
    let sql =
      "SELECT * FROM np WHERE YEAR(date)=? && MONTH(date)=? ORDER BY date";
    let val = [`${year}`, `${month}`];
    query(sql, val).then(function(results) {
      console.log(`- results ${JSON.stringify(results)}`);
    });
  }
}

module.exports = new np();
