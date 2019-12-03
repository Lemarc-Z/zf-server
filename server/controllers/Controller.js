// const { query } = require("../../mysql/util/db");
const np = require("../classes/np");
const py = require("../classes/py");
const others = require("../classes/others");

class Controller {
  // 用户登录
  async ticket(ctx, next) {
    // 获取请求提交的数据
    let orderNum = ctx.request.body.order_num || "";
    let customer = ctx.request.body.customer || "";
    let model = ctx.request.body.model || "";
    let type = ctx.request.body.type || "";
    let color = ctx.request.body.color || "";
    let pieces = ctx.request.body.pieces || "";
    let price = ctx.request.body.price || "";
    let amount = ctx.request.body.amount || "";

    console.log(`${JSON.stringify(customer)}`);

    let client;
    if (customer === "南平") client = np;
    else if (customer === "鹏延") client = py;
    else client = others;

    // let sql = "INSERT INTO hell set ?";
    let now = Date.now();
    let val = {
      id: now.toString().slice(0, 3) + "ZF" + orderNum,
      // customer,
      model,
      type,
      color,
      pieces,
      price,
      amount,
      date: new Date().toISOString().split("T")[0]
    };
    client.insertOne(val);
    console.log(`success`);
    // do something

    ctx.body = {
      success: true
    };
  }
}

module.exports = new Controller();
