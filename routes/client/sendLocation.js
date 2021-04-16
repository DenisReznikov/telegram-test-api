'use strict';

const sendCallback = (app, telegramServer)=> {
  app.post('/sendLocation', (req, res, next)=> {
    telegramServer.addLocation(req.body);
    const data = {ok: true, result: null};
    res.sendResult(data);
  });
};

module.exports = sendCallback;
