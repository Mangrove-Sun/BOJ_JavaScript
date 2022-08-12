const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const range = Number(input[0]);

let score = 0;
let res = 0;
for (let i = 1; i <= range; i += 1) {
  let ox = input[i].split('');

  for (let j = 0; j < ox.length; j += 1) {

    if (ox[j] === 'O') {
      score += 1;
      res += score;
    } else {
      score = 0;
    }
    
  }
  console.log(res);
  res = 0;
  score = 0;
}