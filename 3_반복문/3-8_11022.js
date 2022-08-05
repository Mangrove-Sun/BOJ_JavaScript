const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');

const count = Number(input[0]);

let answer = '';

for (let i = 1; i <= count; i += 1) {
  const n = input[i].split(' ');

  answer += 'Case ' + '#'+ i + ': ' + Number(n[0]) + ' + ' + Number(n[1]) + ' = ' +(Number(n[0]) + Number(n[1])) + '\n';
}

console.log(answer);
