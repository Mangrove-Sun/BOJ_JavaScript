const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString();

const mul = Number(input);

for (let i = 1; i <= 9; i += 1) {
  console.log(mul + ' * ' + i + ' = ' + mul * i);
}
