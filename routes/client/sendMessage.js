'use strict';

const sendMessage = (app, telegramServer)=> {
  app.post('/sendMessage', (req, res, next)=> {
    telegramServer.addUserMessage(req.body);
    const data = {ok: true, result: null};
    res.sendResult(data);
  });
};

module.exports = sendMessage;
