const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().split('\n');

for (let i = 0; i < input.length; i += 1) {
  // trim() - 문자열에 \r\n, \r, \n 제거
  if(input[i].trim()) {
    console.log(Number(input[i]) - 543);
  }
}
