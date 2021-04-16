'use strict';

/* eslint-disable global-require */

module.exports = [
  require('./sendMessage'),
  require('./sendCommand'),
  require('./sendCallback'),
  require('./getUpdates'),
  require('./getUpdatesHistory'),
    require('./sendLocation'),
];

/* eslint-enable global-require */
