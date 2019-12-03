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

  // findAllMonthly() {
  //   let month = new Date().getMonth();
  //   let sql = "SELECT MONTH(date) AS ? FROM others";
  //   query(sql).then(function(results) {
  //     console.log(`- results ${JSON.stringify(results)}`);
  //   });
  // }
}

module.exports = new others();
