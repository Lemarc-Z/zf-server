// const { query } = require("../../mysql/util/db");
const np = require("../classes/np");
const py = require("../classes/py");
const others = require("../classes/others");

class reportController {
  async generateMonthlyReport(ctx, next) {
    let customer = ctx.request.body.client || "";
    let year = ctx.request.body.year || "";
    let month = ctx.request.body.month || "";

    let client;
    if (customer === "南平") client = np;
    else if (customer === "鹏延") client = py;
    else client = others;

    let retData;
    let reportData;
    retData = await client.findAllMonthly(year, month);
    // console.log(`- retData ${JSON.stringify(retData)}`);
    reportData = retData.map(order => [
      order.date.toISOString().slice(0, 10),
      order.id.substr(5),
      order.model,
      order.color,
      order.price,
      order.pieces,
      order.amount
    ]);

    reportData.unshift([
      "日期",
      "ZF单号",
      "型号",
      "镀色",
      "单价",
      "数量",
      "金额"
    ]);

    console.log(`- reportData ${JSON.stringify(reportData)}`);

    ctx.body = {
      success: true,
      csv_data: reportData
    };
  }
}

module.exports = new reportController();
