const redisService = require('../redisService/redisService');

module.exports = {
    init() {
        redisService.init();
    }
}
