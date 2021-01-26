module.exports = {
	send(ctx, msg, extra) {
		ctx.replyWithHTML(msg, extra);
	},

	sendById(bot, userId, msg, extra = {}) {
		bot.telegram.sendMessage(userId, msg, { parse_mode: 'html', ...extra });
	},
};
