const os = require('os');
// console.log('OS:', os.platform());
// console.log('Processor:', os.arch());
// console.log('Info proc:', os.cpus());
// console.log('Free RAM:', os.freemem());
console.log('Total RAM:', Math.ceil(os.totalmem() / 1073741824) + 'Gb');
