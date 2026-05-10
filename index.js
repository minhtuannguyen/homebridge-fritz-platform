/**
 * v6
 *
 * @url https://github.com/minhtuannguyen/homebridge-fritz-platform
 *
 **/

'use strict';

module.exports = function (homebridge) {
  let FritzPlatform = require('./src/platform.js')(homebridge);
  homebridge.registerPlatform('homebridge-fritz-platform', 'FritzPlatform', FritzPlatform, true);
};
