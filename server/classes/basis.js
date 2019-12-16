var { query } = require("../../mysql/util/db");

class basis {
  static insertOne(customer, value) {
    let sql = "INSERT INTO ? set ?";
    
    let val0;
    
    if (customer === "南平") val0 = 'np';
    else if (customer === "鹏延") val0 = 'py';
    // else if (customer === "高尚") val0 = 'gs'; // to do change database
    else val0 = 'others';
    
    let val = [`${val0}`, `${value}`];
    
    
    query(sql, value);
    console.log(`${database} + 1`);
  }

  static findAll(database) {
    let sql = "SELECT * FROM ?";
    query(sql, database).then(function(results) {
      console.log(`- results ${JSON.stringify(results, null, 4)}`);
    });
  }

  static async findAllMonthly(database, year, month) {
    let sql =
      "SELECT * FROM ? WHERE YEAR(date)=? && MONTH(date)=? ORDER BY date";
    let val = [`${database}`, `${year}`, `${month}`];
    let rows = await query(sql, val).then(function(results) {
      return results;
    });
    return rows;
  }
}

module.exports = basis;
