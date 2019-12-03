const router = require("koa-router")();
const userctrl = require("../controllers/Controller");

router
  // 用户模块
  .post("/ticket", userctrl.ticket);
// .get("/userinfo", userctrl.userInfo);
//  .put('xxx')
//  .delete('xxx')

module.exports = router;
