const router = require("koa-router")();
const ticketController = require("../controllers/ticketController");
const reportController = require("../controllers/reportController");

router
  .post("/api/ticket", ticketController.ticket)
  .post("/api/report", reportController.generateMonthlyReport);

module.exports = router;
