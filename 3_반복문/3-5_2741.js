const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const range = Number(input);

let answer = '';
for (let i = 1; i <= range; i += 1) {
  // for문 돌때마다 console을 찍으면 시간초과가 뜨기 때문에 변수에 담아 한번에 출력한다.
  answer += i + '\n';
}

console.log(answer);

// 메모리 22840KB / 시간 248ms
