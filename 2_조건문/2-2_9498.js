const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().split(' ');

const score = Number(input[0]);

// if문
if (score >= 90) {
  console.log('A');
} else if (score >= 80) {
  console.log('B');
} else if (score >= 70) {
  console.log('C');
} else if (score >= 60) {
  console.log('D');
} else {
  console.log('F');
}
