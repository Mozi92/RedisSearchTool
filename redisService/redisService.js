const redis = require('redis');

module.exports = {
    init() {
        console.log(redis.createClient())
    },
    getString() {
    }
}
