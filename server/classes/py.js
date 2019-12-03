const { query } = require("../../mysql/util/db");

class py {
  async insertOne(value) {
    // 获取请求提交的数据

    let sql = "INSERT INTO py set ?";
    query(sql, value);
    console.log(`np +1 `);
  }
}

module.exports = new py();
