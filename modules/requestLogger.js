'use strict';

const debug = require('debug')('TelegramServer:request');
/**
 * requestLogger module - log requests
 * @module requestLogger
 */

module.exports = (req, res, next)=> {
  const reqLit = {
    body: req.body,
    cookies: req.cookies,
    files: req.cookies,
    headers: req.headers,
    method: req.method,
    params: req.params,
    query: req.query,
    url: req.url,
    originalUrl: req.originalUrl,
  };
  if (reqLit.url !== "/bot1486083484:AAEBHCVAtKRQRD0neNbem7NgrUAnbIo2enU/getUpdates")
  {
	debug(`Request: ${JSON.stringify(reqLit)}`);
  }
  
  next();
};
