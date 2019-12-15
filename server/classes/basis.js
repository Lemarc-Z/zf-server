const { query } = require("../../mysql/util/db");


class YMBaseModel
{
  insertOne(database, value) {
    let sql = "INSERT INTO ? set ?";
    let val = [`${database}`, `${value}`];
    query(sql, value);
    console.log(`${database} + 1`);
  }

  findAll(database) {
    let sql = "SELECT * FROM ?";
    query(sql, database).then(function(results) {
      console.log(`- results ${JSON.stringify(results, null, 4)}`);
    });
  }

  async findAllMonthly(database ,year, month) {
    let sql =
      "SELECT * FROM ? WHERE YEAR(date)=? && MONTH(date)=? ORDER BY date";
    let val = [`${database}`, `${year}`, `${month}`];
    let rows = await query(sql, val).then(function(results) {
      return results;
    });
    return rows;
  }
}