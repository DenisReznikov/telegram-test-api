'use strict';

const {handle} = require('./utils');

const getUpdates = (app, telegramServer)=> {
  // botsample%20token/getUpdates
  handle(app, '/bot:token/getUpdates', (req, res, unusedNext) => {
    const botToken = req.params.token;
    let messages = telegramServer.storage.userMessages.filter((update) => (
      update.botToken === botToken && !update.isRead
    ));
    // turn messages into updates
    messages = messages.map((update)=> {
      update.isRead = true;
	  console.log(update);
      if ('callbackQuery' in update) {
		  console.log('im in callback')
        return {
          update_id: update.updateId,	  
          callback_query: {
            id: String(update.callbackId),
            from: update.callbackQuery.from,
            message: update.callbackQuery.message,
				  			
			data: update.callbackQuery.data,
			chat_instance: update.callbackQuery.chat_instance,
          },
        };
      }
	  if ('location' in update.message) {
		  console.log('im in location')
		  return {
          update_id: update.updateId,	  
          message: {
            message_id: update.messageId,
			from: update.message.from,
			location: update.message.location,
			chat: update.message.chat,
			date: parseInt(update.message.date),
			text: update.message.text,
			entities: update.entities,
          },
        };
	  }
	  console.log('im in message')
      return {
        update_id: update.updateId,
        message: {
          message_id: update.messageId,
          from: update.message.from,
		  
          chat: update.message.chat,
          date: parseInt(update.message.date),
          text: update.message.text,
          entities: update.entities,
        },
      };
    });
    const data = {ok: true, result: messages, from: 'bot'};
    res.sendResult(data);
  });
};

module.exports = getUpdates;
