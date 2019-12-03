// const { query } = require("../../mysql/util/db");
const np = require("../classes/np");
const py = require("../classes/py");
const others = require("../classes/others");

class reportController {
  async generateMonthlyReport(customer) {
    let client;
    if (customer === "南平") client = np;
    else if (customer === "鹏延") client = py;
    else client = others;

    let retData = client.findAll();

    ctx.body = {
      success: true
      // to do CSV
    };
  }
}

module.exports = new reportController();
