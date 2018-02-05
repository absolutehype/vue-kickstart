const axios = require('axios');

// module.exports = {
// 	'Currency': 'Hola',
// 	'active': 'Algo salió mal',
// 	'error': 'Error'
// };


function getTokens() {

	axios.get('https://s3-eu-west-1.amazonaws.com/oneflow-public/locales/production/es-ES.json')
		.then(function (response) {
			// console.log(response.data);
			return response.data;
		})
		.catch(function (error) {
			console.log(error);
		});
}

const tokens = getTokens();

console.log(tokens);
