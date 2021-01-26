const msg = require('../modules/msg.js');
const fetch = require('node-fetch');

module.exports = function getHelpCommand() {
	return (ctx) => {
		fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
			.then((resp) => resp.json())
			.then((data) => {
				const courseInUSD = data.bpi.USD.rate.replace(/\..*/, '');
				const lastUpd = data.time.updatedISO.replace('T', ' ').slice(0, 16);

				const text = `
💵 <b>Курс биткоина</b>: $${courseInUSD}
<i>(Обновлено ${lastUpd})</i>
        `;

				msg.send(ctx, text);
			});
	};
};
