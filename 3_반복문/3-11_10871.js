const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');

const range = Number(input[0].split(' ')[0]);
const MAX = Number(input[0].split(' ')[1]);
const data = input[1].split(' ');

let res = '';
for (let i = 0; i < range; i += 1){
  if (Number(data[i]) < MAX) {
    res += data[i] + ' ';
  }
}

console.log(res);
