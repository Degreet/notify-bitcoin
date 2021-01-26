module.exports = {
	send(ctx, msg, extra) {
		ctx.replyWithHTML(msg, extra);
	},
};
