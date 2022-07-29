const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().split(' ');

let h = Number(input[0]);
let m = Number(input[1]);

if (m < 45) {
  h -= 1;
  m = 60 - (45 - m);
  if (h < 0) {
    h = 23;
  }
} else {
  m = (m - 45);
}

console.log(h + " " + m);
