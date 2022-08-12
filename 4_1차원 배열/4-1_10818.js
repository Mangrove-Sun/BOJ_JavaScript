const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const range = Number(input[0]);
const nums = input[1].split(' ');

let MAX = -1000000;
let MIN = 1000000;

for (let i = 0; i < range; i += 1){
  let value = Number(nums[i]);

  if (value < MIN) MIN = value;
  if (value > MAX) MAX = value;

}
console.log(`${MIN} ${MAX}`);