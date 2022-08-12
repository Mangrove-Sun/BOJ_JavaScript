const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let res = [];
for (let i = 0; i < 10; i += 1) {

  if (!res.includes(input[i] % 42)) {
    res.push(input[i] % 42);
  }

}
console.log(res.length);