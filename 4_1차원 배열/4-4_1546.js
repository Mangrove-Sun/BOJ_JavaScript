const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const range = Number(input[0]);
const scores = input[1].split(' ').map(score => Number(score));

let max = -1;
let newScore = [];
let avg = 0;
let sum = 0;

// 최댓값
for (let i = 0; i < range; i += 1) {
  if (scores[i] > max) max = scores[i];
}

// 새로운 점수
for (let i = 0; i < range; i += 1) {
  newScore[i] = scores[i] / max * 100;
}

// 성적 합
for (let i = 0; i < range; i += 1) {
  sum += newScore[i];
}
avg = sum / range;

console.log(avg)