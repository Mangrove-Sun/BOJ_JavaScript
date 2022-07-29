const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().split(' ');

const year = Number(input[0]);

if (year % 4 == 0) {
  if (year % 100 != 0) {
      console.log('1');
  } else if (year % 400 == 0) {
    console.log('1');
  } else {
    console.log('0');
  }
} else {
  console.log('0');
}
