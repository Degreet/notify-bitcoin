module.exports = function setRoutes(bot, getCollection) {
	bot.command('start', require('./routes/start.js')(getCollection));
	bot.command('help', require('./routes/help.js')());
	bot.command('getcourse', require('./routes/getcourse.js')());
};
