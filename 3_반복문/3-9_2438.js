const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');

const range = Number(input[0]);

let answer = '';

for (let i = 1; i <= range; i += 1) {
  answer = '';
  for (let j = 1; j <= i; j +=1) {
    answer += '*';
  }
  console.log(answer);
}
