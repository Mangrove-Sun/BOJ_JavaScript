const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').toString().split('\n');

const a = Number(input[0]); // 첫 번째 입력값을 숫자데이터로 변환
const b = input[1].trim().split(''); // 두 번째 입력값을 한 글자 단위로 나눔

// 출력은 1의 자리부터 되어야 하기 때문에 감소 조건식(배열의 마지막 데이터부터 처음 데이터 순서로 꺼내옴) 적용
for (let i = b.length - 1; i >= 0; i -= 1) {
  // b데이터는 string이다. 계산하는데 문제는 없지만 number로 형 변환 함.
  console.log(a * Number(b[i]));
}
// b.join('')의 타입은 string이므로 number로 타입 변환
console.log(a * Number(b.join('')));
