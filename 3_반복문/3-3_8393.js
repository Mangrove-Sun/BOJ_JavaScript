const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString();

const N = Number(input);

let sum = 0;
for (let i = 1; i <= N; i += 1) {
  sum += i;
}
console.log(sum);
