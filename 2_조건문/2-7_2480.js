const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().split(' ');
let NumberInput=[];
input.forEach(data => {
  NumberInput.push(Number(data))
})

const firDice = NumberInput[0];
const secDice = NumberInput[1];
const thirDice = NumberInput[2];

if (firDice == secDice && firDice == thirDice) {
  console.log(10000 + firDice * 1000);
} else if (firDice == secDice || firDice == thirDice) {
  console.log(1000 + firDice * 100);
} else if(secDice == thirDice) {
  console.log(1000 + secDice * 100);
} else {
  NumberInput.sort((a, b) => b - a)
  console.log(NumberInput[0] * 100);
}
