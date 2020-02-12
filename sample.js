const config = require('config');
const nameConfig = require('./config/beatles-member.json')

const dbconfig = config.get('Customer.dbConfig.host');
console.log(`${dbconfig}`)

console.log(`keys are ${Object.keys(nameConfig)}.`);
Object.keys(nameConfig).
  filter(n => 'birth' in nameConfig[n]).
  forEach(n => console.log(`birth of ${n} is ${nameConfig[n].birth}.`));

