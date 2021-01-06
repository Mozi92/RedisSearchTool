const adaper=require('../adaper/adaper');

module.exports=function (router) {
    router.get('/user', (ctx, next) => {
        adaper.init();
        ctx.body = 'Hello World user';
    });

    router.get('/', (ctx, next) => {
        ctx.body = 'Hello World';
    });
    return router;
}
