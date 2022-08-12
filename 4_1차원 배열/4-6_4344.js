const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const range = Number(input[0]);
let student = 0;
let sum = 0;
let avg = 0;
let num = 0;

for (let i = 1; i <= range; i += 1) {
  const data = input[i].trim().split(' ').map(n => Number(n));
  student = data[0];

  for (let j = 1; j < data.length; j += 1) {
    sum += data[j];
  }

  avg = sum / student;

  for (let k = 0; k < data.length; k +=1) {
    if (data[k + 1] > avg) num += 1;
  }
  
  console.log(((num / student) * 100).toFixed(3) + '%');
  sum = 0;
  avg = 0;
  num = 0;
}