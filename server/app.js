var Koa = require("koa");
var app = new Koa();
var koacfg = require('./config/koa');

// const index = router
//   .get("/", ctx => {
//     ctx.response.body = "hello zf";
//   })
//   .routes();
app.init = async function () {
    koacfg (app);
    app.listen (3000);
    console.log(`- zf server started`);
};

app.init().catch(function (err) {
        console.error (err.stack);
        process.exit (1);
});



