const router = require("koa-router")();
const userctrl = require("../controllers/Controller");

router
  // 用户模块
  .post("/login", userctrl.login)
  .get("/userinfo", userctrl.userInfo);
//  .put('xxx')
//  .delete('xxx')

module.exports = router;
