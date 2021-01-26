const fetch = require('node-fetch');

module.exports = async function getCourseInUSD() {
	const resp = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
	const data = await resp.json();

	const courseInUSD = data.bpi.USD.rate.replace(/\..*/, '');
	const lastUpd = data.time.updatedISO.replace('T', ' ').slice(0, 16);

	return `
💵 <b>Курс биткоина</b>: $${courseInUSD}
<i>(Обновлено ${lastUpd})</i>
  `;
};
