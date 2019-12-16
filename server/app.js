var Koa = require("koa");
var app = new Koa();
var koacfg = require("./config/koa");
var config = require("../config");

// const index = router
//   .get("/", ctx => {
//     ctx.response.body = "hello zf";
//   })
//   .routes();
app.init = async function() {
  koacfg(app);
  app.listen(config.port);
  console.log(`- zf server started`);
};

app.init().catch(function(err) {
  console.error(err.stack);
  process.exit(1);
});
