const msg = require('../modules/msg.js');

module.exports = function getSubscribeCommand(getCollection) {
	return async (ctx) => {
		const userId = ctx.from.id;
		const users = getCollection('users');
		const candidate = await users.findOne({ userId });

		if (candidate) {
			const isSubscribed = candidate.sub;
			const text = isSubscribed
				? 'отписались от рассылки'
				: 'подписались на рассылку';

			await users.updateOne({ userId }, { $set: { sub: !isSubscribed } });
			msg.send(ctx, `✅ Вы успешно ${text}`);
		} else {
			msg.send(ctx, `❌ Ошибка. Введите /start.`);
		}
	};
};
