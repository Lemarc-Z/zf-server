const { query } = require("../../mysql/util/db");

class Tickets {
  async insertOne(value) {
    // 获取请求提交的数据

    let sql = "INSERT INTO hell set ?";
    query(sql, value);
    console.log(`success`);
  }
}

module.exports = new Tickets();
