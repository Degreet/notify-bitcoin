const getCourseInUSD = require('./modules/get-course-in-usd');
const msg = require('./modules/msg');

module.exports = function setMailing(bot, getCollection) {
	return () => {
		const now = new Date();
		now.setHours(now.getHours());
		const next = new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate() + (now.getHours() >= 18),
			userAlarmTime
		);
		const timeout = next - now;
		setTimeout(async () => {
			const users = getCollection('users');
			const subscribedUsers = await users.find({ sub: true }).toArray();
			subscribedUsers.forEach((user) => {
				const text = getCourseInUSD();
				msg.sendById(bot, user.userId, text);
			});
		}, timeout);
	};
};
