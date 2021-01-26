const msg = require('../modules/msg.js');
const fetch = require('node-fetch');
const getCourseInUSD = require('../modules/get-course-in-usd.js');

module.exports = function getCourseCommand() {
	return async (ctx) => {
		const text = await getCourseInUSD();
		msg.send(ctx, text);
	};
};
