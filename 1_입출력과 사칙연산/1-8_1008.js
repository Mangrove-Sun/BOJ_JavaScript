// node.js에 내장되어 있는 fs모듈로 파일 입출력 처리
const fs = require('fs');

// 파일을 읽은 후 실행해야 하는 경우이므로 즉, 동기 처리를 하기위해 readFileSync()함수를 사용
// 비동기 처리는 readFile()
// 주의할 점은 반드시 두번째 인자를 "utf8"로 명시하여 인코딩이 되도록 해줘야 한다는 것이다.
// 두번째 인자를 생략하면 콜백 함수의 data 인자로 문자열이 아닌 버퍼(buffer)가 넘어오기 때문에 육안으로 인식이 어렵다.
// '/dev/stdin' 경로 안에 문제의 입력값 데이터가 들어있어 그 데이터를 읽어와 문자열로 변환 후 공백을 기준으로 나눠 배열로 할당 함.
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);

console.log(a / b);
