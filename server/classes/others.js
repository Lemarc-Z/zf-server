const { query } = require("../../mysql/util/db");

class others {
  async insertOne(value) {
    // 获取请求提交的数据

    let sql = "INSERT INTO others set ?";
    query(sql, value);
  }
}

module.exports = new others();
