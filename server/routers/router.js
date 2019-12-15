const router = require("koa-router")();
const ticketController = require("../controllers/ticketController");
const reportController = require("../controllers/reportController");

router
  .post("/ticket", ticketController.ticket)
  .post("/report", reportController.generateMonthlyReport);

module.exports = router;
