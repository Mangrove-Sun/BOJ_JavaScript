const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().split(' ');

// 입력값 각 변수에 할당
const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

// 계산
const cal1 = (A + B) % C;
const cal2 = ((A % C) + (B % C)) % C;
const cal3 = (A * B) % C;
const cal4 = ((A % C) * (B % C) % C);

console.log(cal1);
console.log(cal2);
console.log(cal3);
console.log(cal4);
