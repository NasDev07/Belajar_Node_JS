const os = require('os');

console.log(`Free Memory ${os.freemem}`);
console.log(`Total Memory ${os.totalmem}`);
console.log(`Uptime ${os.uptime}`);
console.log(`Version ${os.version}`);
console.log(`Release ${os.release}`);
