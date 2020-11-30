var bitcoin = require('bitcoin');
var fs = require('fs');
var path = require('path');
var config = require('../config/config');

var client = new bitcoin.Client({
    host: config.BITCOIND_HOST,
    port: config.BITCOIND_PORT,
    user: config.BITCOIND_USER,
    pass: config.BITCOIND_PASS,
    timeout: 6000
});

module.exports = client;