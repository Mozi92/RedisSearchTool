const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const routeConfig = require('./routeConfig/routeConfig');

router.get('/', (ctx, next) => {
    ctx.body = 'Hello World';
});

routeConfig(router);

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, function () {
    console.log('监听端口%d', 3000)
});
