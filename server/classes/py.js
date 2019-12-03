const { query } = require("../../mysql/util/db");

class py {
  insertOne(value) {
    // 获取请求提交的数据

    let sql = "INSERT INTO py set ?";
    query(sql, value);
    console.log(`np +1 `);
  }

  findAll() {
    let sql = "SELECT * FROM py";
    query(sql).then(function(results) {
      console.log(`- results ${JSON.stringify(results)}`);
    });
  }
}

module.exports = new py();
