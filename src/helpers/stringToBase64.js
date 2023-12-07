const str = 'Your string here';
const base64 = Buffer.from(str, 'utf8').toString('base64');
console.log(base64);