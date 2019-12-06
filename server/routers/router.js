const router = require("koa-router")();
const ticketController = require("../controllers/ticketController");
const reportController = require("../controllers/reportController");

router
  // 用户模块
  .post("/ticket", ticketController.ticket)
  .post("/report", reportController.generateMonthlyReport);
// .get("/userinfo", userctrl.userInfo);
//  .put('xxx')
//  .delete('xxx')

module.exports = router;
