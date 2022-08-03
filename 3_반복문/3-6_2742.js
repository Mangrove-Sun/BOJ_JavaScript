const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const range = Number(input);

let answer = '';
for (let i = range; i >= 1; i -= 1) {
  answer += i + '\n';
}

console.log(answer);
