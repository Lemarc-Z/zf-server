const mysql = require("mysql");

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "89258329",
  database: "orders"
});

let query = function(sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, values, (err, rows) => {
          console.log(`- sql ${JSON.stringify(sql)}`);
          console.log(`- values ${JSON.stringify(values)}`);
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
          connection.release();
        });
      }
    });
  });
};

module.exports = {
  query
};
