const msg = require('../modules/msg.js');

module.exports = function getStartCommand(getCollection) {
	return async (ctx) => {
		const userId = ctx.from.id;
		const users = getCollection('users');
		const candidate = await users.findOne({ userId });

		if (!candidate) users.insertOne({ userId, sub: false });

		const text = `
👋 Добро пожаловать в <b>Notify Bitcoin</b>!
Введите <b>/help</b>, чтобы узнать возможности бота.
    `;

		msg.send(ctx, text);
	};
};
