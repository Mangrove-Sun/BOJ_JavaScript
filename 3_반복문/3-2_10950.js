const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().split('\n');

const count = Number(input[0]);

for (let i = 1; i <= count; i += 1) {
  const n = input[i].toString().split(' ');
  const a = Number(n[0]);
  const b = Number(n[1]);
  
  console.log(a + b);
}
