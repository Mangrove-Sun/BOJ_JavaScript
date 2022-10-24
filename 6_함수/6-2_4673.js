// 셀프 넘버 - https://www.acmicpc.net/problem/4673

selfNumber();

function selfNumber() {
  // length값의 길이 만큼의 배열을 만들고 false값으로 초기화
  let numArr = Array.from({ length: 10000 }, () => false);
  let result = 0;

  for (let i = 1; i < numArr.length; i += 1) {
    result = cal(i);

    if (result <= 10000) {
      numArr[result] = true;
    }
    if (!numArr[i]) {
      console.log(i);
    }
  }
}

function cal(n) {
  let temp = 0;
  temp =
    n +
    parseInt(n / 1000) +
    parseInt((n % 1000) / 100) +
    parseInt((n % 100) / 10) +
    parseInt(n % 10);

  return temp;
}
