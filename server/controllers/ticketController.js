// const { query } = require("../../mysql/util/db");
var np = require("../classes/np");
var py = require("../classes/py");
var gs = require("../classes/gs");
var others = require("../classes/others");

class ticketController {
  async ticket(ctx, next) {
    try {
      let orderNum = ctx.request.body.order_num || "";
      let customer = ctx.request.body.customer || "";
      let model = ctx.request.body.model || "";
      let type = ctx.request.body.type || "";
      let color = ctx.request.body.color || "";
      let pieces = ctx.request.body.pieces || "";
      let price = ctx.request.body.price || "";
      let amount = ctx.request.body.amount || "";
      let remark = ctx.request.body.remark || "";

      console.log(`${JSON.stringify(customer)}`);

      let client;
      let database;
      let val;

      let now = Date.now();
      val = {
        id: now.toString().slice(-3) + "ZF" + orderNum,
        // customer,
        model,
        type,
        color,
        pieces,
        price,
        amount,
        date: new Date().toISOString().split("T")[0],
        remark
      };

      if (customer === "南平") {
        client = np;
        database = "np";
      } else if (customer === "鹏延") {
        client = py;
        database = "py";
      } else if (customer === "高尚") {
        client = gs;
        database = "gs";
      } else {
        client = others;
        database = "others";
        val.customer = customer; // 其他厂家需要写明
      }

      client.insertOne(database, val);
      ctx.response.body = {
        success: true
      };
    } catch (err) {
      console.error(`err[${err.status}]: ${err.message}`);
      console.error("err.stack: " + err.stack);
      ctx.response.body = { status: err.status || 500 };
    }
  }
}

module.exports = new ticketController();
