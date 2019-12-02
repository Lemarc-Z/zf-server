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

    // do something

    ctx.body = {
      model,
      type
    };
  }

  // 用户信息
  async userInfo(ctx, next) {
    // do something

    // 假设这是请求回来的数据
    let data = {
      name: "jk",
      age: 25
    };
    ctx.body = {
      status: true,
      data
    };
  }
}

module.exports = new Controller();
