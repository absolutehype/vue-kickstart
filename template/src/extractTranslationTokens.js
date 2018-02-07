const fs = require('fs');
const path = require('path');

const tokenHash = {};

function processFile(checkPath) {
	if (path.extname(checkPath) === '.vue') {


		const contents = fs.readFileSync(path.join(__dirname, checkPath)).toString();
		// Regex detecting uses of $t. function, v-t directive and $i18n.t function
		const matches = contents.match(/(\$t\('*[^"{$}=]*'\)|v-t=*"[^"{$}=]*"|\$i18n\.t\('*[^"{$}=]*')/g);


		if (matches) {

			matches.forEach(match => {
				let token;
				// for the use of $t
				if (match.indexOf('$t') !== -1) {
					token = match.replace('$t(\'', '');
					token = token.replace('\')', '');
					// for the use of v-t directive
				} else if (match.indexOf('v-t') !== -1) {
					token = match.replace('v-t="\'', '');
					token = token.replace('\'"', '');
					// for the use of this.$i18n.t
				} else if (match.indexOf('$i18n.t') !== -1) {
					token = match.replace('$i18n.t(\'', '');
					token = token.replace('\'', '');
				}
				if (token.length > 0) {
					const parts = checkPath.split('/');
					const parts2 = parts[parts.length - 1].split('.');
					const page = parts2[0];

					if (tokenHash[token] && tokenHash[token].pages.indexOf(page) !== -1) {
						tokenHash[token].count++;
					} else if (tokenHash[token]) {
						tokenHash[token].pages.push(page);
						tokenHash[token].count++;
					} else {
						tokenHash[token] = {
							pages: [page],
							token,
							count: 1
						};
					}
				}
			});
		}
	}

	return tokenHash;
}

function processDir(dirPath) {
	const dirs = fs.readdirSync(path.join(__dirname, dirPath));
// eslint-disable-next-line no-use-before-define
	checkDirs(dirPath, dirs);
}

function checkDirs(dirPath, dirs) {
	dirs.forEach(dir => {
		const checkPath = path.join(dirPath, dir);
		const stats = fs.lstatSync(path.join(__dirname, checkPath));
		if (stats.isDirectory()) {
			processDir(checkPath);
		}
		if (stats.isFile()) {
			processFile(checkPath);
		}
	});
}

function main(directory) {
	processDir(directory);

	let totalCount = 0;
	let jsonObject = {};
	Object.keys(tokenHash).forEach(key => {
		const newToken = tokenHash[key].token;
		if (!jsonObject[newToken]) {
			jsonObject[newToken] = newToken;
		}
		totalCount += tokenHash[key].count;
	});
	console.log(JSON.stringify(jsonObject));
}

main('../src');

