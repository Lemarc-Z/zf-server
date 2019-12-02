const Koa = require("koa");
const router = require("koa-router")();
const bodyParser = require("koa-bodyparser");
const apiRouter = require("./routers/router");
const cors = require("@koa/cors");
const app = new Koa();

const index = router
  .get("/", ctx => {
    ctx.response.body = "hello zf";
  })
  .routes();

app.use(cors());
app.use(index);
app.use(bodyParser());
app.use(apiRouter.routes());

app.listen(3001);

console.log("[demo] start-quick is starting at port 3001");
