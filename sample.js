const config = require('config');

const dbconfig = config.get('Customer.dbConfig.host');
console.log(`${dbconfig}`)
