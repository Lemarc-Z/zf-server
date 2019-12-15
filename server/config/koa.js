// var router = require("koa-router")();
var bodyParser = require("koa-bodyparser");
var compress = require("koa-compress");
var apiRouter = require("../routers/router");
var cors = require("@koa/cors");


module.exports  = function (app) {
    app.use(cors({
            maxAge:         7 * 24 * 3600,
            credentials:    true,
            methods:        'GET, HEAD, OPTIONS, PUT, POST, DELETE',
            headers:        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    }));

    // ref:
    // https://github.com/koajs/bodyparser
    app.use(bodyParser({
            extendTypes: {
                    // will parse text/xml type body as a text string
                    // text/html: 企信通专用
                    text: ['text/xml', 'application/xml', 'text/html'],
            },
            enableTypes: ['json', 'form', 'text']
    }));
    app.use(compress({
            filter: function (content_type) {
                    let     compressible    = /application\/json/i.test (content_type);
                    // console.log (`- testing ${content_type} => ${compressible}`);
                    return compressible;
            },
            threshold:  2048,
            flush:      require ('zlib').Z_SYNC_FLUSH
    }));
    app.use(apiRouter.routes());
}