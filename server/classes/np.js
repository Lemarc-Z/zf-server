const { query } = require("../../mysql/util/db");

class np {
  async insertOne(value) {
    // 获取请求提交的数据

    let sql = "INSERT INTO np set ?";
    query(sql, value);
    console.log(`np +1 `);
  }
}

module.exports = new np();
