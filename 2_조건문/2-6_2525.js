const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().split('\n');

const time = input[0].split(' ');

let h = Number(time[0]);
let m = Number(time[1]);
const makeMin = Number(input[1]);

const makedHour = parseInt((m + makeMin) / 60);
const makedMin = (m + makeMin) % 60;

h = h + makedHour;
m = makedMin;

if (h >= 24) {
  h = h - 24;
}

console.log(h, m);
