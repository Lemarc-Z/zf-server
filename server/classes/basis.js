var { query } = require("../../mysql/util/db");

class basis {
  static insertOne(database, value) {
    let sql = `INSERT INTO ${database} set ?`;
    query(sql, value);
    console.log(`${database} + 1`);
  }

  static findAll(database) {
    let sql = `SELECT * FROM ${database}`;
    query(sql).then(function(results) {
      console.log(`- results ${JSON.stringify(results, null, 4)}`);
    });
  }

  static async findAllMonthly(database, year, month) {
    let sql = `SELECT * FROM ${database} WHERE YEAR(date)=? && MONTH(date)=? ORDER BY date`;
    let val = [`${year}`, `${month}`];
    let rows = await query(sql, val).then(function(results) {
      return results;
    });
    return rows;
  }
}

module.exports = basis;
