const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const range = Number(input.length);
let num = null;

let MAX = -1000000;
for (let i = 0; i < range; i += 1){
  let value = Number(input[i]);

  if (value > MAX) {
    MAX = value;
    num = i + 1;
  }

}
console.log(MAX + '\n' + num);