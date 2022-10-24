// 한수 - https://www.acmicpc.net/problem/1065

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const res = hansoo(Number(input[0]));
console.log(res);

function hansoo(num) {
  let count = 0;

  if (num < 100) {
    // 1~99는 등차수열이다.
    return num;
  } else {
    count += 99;
    for (let i = 100; i <= num; i += 1) {
      let term = String(i).split("");

      // 1000은 등차수열이 아니며 1000보다 작거나 같은 자연수가 주어지기 때문에 break를 사용함.
      if (i === 1000) break;

      if (term[0] - term[1] === term[1] - term[2]) count += 1;
    }
  }
  return count;
}
