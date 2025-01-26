function solution(arrayA, arrayB) {
  // 최대 공약수 구하기
  function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  // 최대 공약수의 약수 구하기
  function findDivisors(num) {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divisors.push(i);
        if (i !== num / i) divisors.push(num / i);
      }
    }
    return divisors.sort((a, b) => a - b);
  }

  // 각 카드들의 모든 최대공약수 구하기
  function findOverallGCD(array) {
    return array.reduce((acc, num) => gcd(acc, num));
  }

  // 공약수 중 카드 숫자들을 하나도 나눌 수 없는 값 필터링
  function findValidDivisors(divisors, array) {
    return divisors.filter((divisor) =>
      array.every((num) => num % divisor !== 0)
    );
  }

  // 철수 카드
  const gcdA = findOverallGCD(arrayA);
  const divisorsA = findDivisors(gcdA);
  const validA = findValidDivisors(divisorsA, arrayB); // 영희 카드에서 나눌 수 없는 값

  // 영희 카드
  const gcdB = findOverallGCD(arrayB);
  const divisorsB = findDivisors(gcdB);
  const validB = findValidDivisors(divisorsB, arrayA); // 철수 카드에서 나눌 수 없는 값

  // 결과값 계산
  const maxValidA = validA.length > 0 ? Math.max(...validA) : 0;
  const maxValidB = validB.length > 0 ? Math.max(...validB) : 0;

  return Math.max(maxValidA, maxValidB);
}