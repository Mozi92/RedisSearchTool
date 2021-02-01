const redis = require('redis');
const client = redis.createClient();
module.exports = {
    setString(key, value) {
        return client.set(key, value, function (err, res) {
            console.log(err, res)
        })
    },
    getString(key) {
        return client.get(key, function (err, res) {
            console.log(err, res)
        })
    },
    hashSet(key, filed, value) {
        return client.hmset([key, filed, value], function (err, res) {
            console.log(err, res)
        });
    },
    hashGet(key) {
        return client.hgetall(key, function (err, res) {
            console.log(err, res)
        });
    }
}
