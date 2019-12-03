const router = require("koa-router")();
const ticketController = require("../controllers/ticketController");

router
  // 用户模块
  .post("/ticket", ticketController.ticket);
// .get("/userinfo", userctrl.userInfo);
//  .put('xxx')
//  .delete('xxx')

module.exports = router;
