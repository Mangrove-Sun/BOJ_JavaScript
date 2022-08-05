const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');

const range = Number(input[0]);

let answer = '';
for (let i = 1; i <= range; i += 1) {
  for (let j = 1; j <= range - i; j += 1) {
    answer += ' ';
  }
  for (let k = 1; k <= i; k +=1) {
    answer += '*';
  }
  answer += '\n';
  
}
console.log(answer);
