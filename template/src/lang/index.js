const ch = require('./ch.js');
const en = require('./en.js');
// const es = require('./es.js');
const fr = require('./fr.js');
const axios = require('axios');

async function getTokens() {

	return axios.get('https://s3-eu-west-1.amazonaws.com/oneflow-public/locales/production/es-ES.json')
		.then(function (response) {
			// console.log(response.data);
			return response.data;

		})
		.catch(function (error) {
			console.log(error);
		});
}

const translationObj = { ch, en, fr, es: getTokens() };
console.log(translationObj);

export default translationObj;
