// 언어 제한
// 제출 가능 언어 C++17, Java 8, Python 3, C11, PyPy3, C99, C++98, C++11, C++14, Go, C99 (Clang), C++98 (Clang), C++11 (Clang), C++14 (Clang), C11 (Clang), C++17 (Clang)

// 문제
// 정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.
const total = (a) => {
  let n = 0;
  for (let i = 0; i < a.length; i += 1) {
    n += a[i];
  }
  return n;
};
