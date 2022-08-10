const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');

const range = Number(input.length);

let i = 0;
while (i < range - 1) {
  let nums = input[i].split(' ').map(num => Number(num));

  let a = nums[0];
  let b = nums[1];

  console.log(a + b);
  i += 1;
}

