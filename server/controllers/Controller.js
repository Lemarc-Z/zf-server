// const { query } = require("../../mysql/util/db");
const tickets = require("../classes/Tickets");

class Controller {
  // 用户登录
  async login(ctx, next) {
    // 获取请求提交的数据

    console.log("attemptting my ass");
    let customer = ctx.request.body.customer || "";
    let model = ctx.request.body.model || "";
    let type = ctx.request.body.type || "";
    let color = ctx.request.body.color || "";
    let pieces = ctx.request.body.pieces || "";
    let price = ctx.request.body.price || "";
    let amount = ctx.request.body.amount || "";

    console.log(`${JSON.stringify(customer)}`);

    // let sql = "INSERT INTO hell set ?";
    let now = Date.now();
    let val = {
      id: "ZF" + now.toString().slice(-8),
      customer,
      model,
      type,
      color,
      pieces,
      price,
      amount
    };
    tickets.insertOne(val);
    console.log(`success`);
    // do something

    ctx.body = {
      success: true
    };
  }
}

module.exports = new Controller();
