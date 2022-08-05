const fs = require('fs');

// 인코딩 방식을 명시해 주면 .toString()을 생략해도 된다.
// 반대로 인코딩 방식이 명시되어있지 않으면 .toString()을 사용해야한다.
const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');

const count = Number(input[0]);

let answer = '';

for (let i = 1; i <= count; i += 1) {
  const n = input[i].split(' ');

  answer += 'Case ' + '#'+ i + ': ' + (Number(n[0]) + Number(n[1])) + '\n';
}

console.log(answer);
