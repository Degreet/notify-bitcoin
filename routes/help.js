const msg = require('../modules/msg.js');

module.exports = function getHelpCommand() {
	return (ctx) => {
		const text = `
📋 <b>Список команд</b>:
(/getcourse): покажет последний курс биткоина
(/subscribe): подписаться/отписаться от рассылки на
  изменение курса биткоина (каждый день в 17:50)
    `;

		msg.send(ctx, text);
	};
};
