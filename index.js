const { Telegraf } = require('telegraf');
const useMongo = require('./modules/useMongo.js');
const setRoutes = require('./setRoutes.js');

const dotenv = require('dotenv');
dotenv.config();

const token = process.env.BOT_TOKEN;
const bot = new Telegraf(token);

function setup() {
	const username = 'Node';
	const cluster = 'cluster0-ttfss';
	const password = process.env.MONGO_KEY;
	const dbName = 'notify-bitcoin-bot';

	useMongo(username, cluster, password, dbName).then((getCollection) => {
		setRoutes(bot, getCollection);
		bot.launch();
	});
}

setup();
