function solution(numbers) {
  let numberList = numbers.split("");
  const numberSet = new Set();

  function dfs(arr, picked = []) {
    if (picked.length > 0) {
      const num = Number(picked.join(""));
      numberSet.add(num);
    }

    for (let i = 0; i < arr.length; i++) {
      const next = [...arr];
      const pickedOne = next.splice(i, 1);
      dfs(next, picked.concat(pickedOne));
    }
  }

  dfs(numberList);

  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let count = 0;
  numberSet.forEach((num) => {
    if (isPrime(num)) count++;
  });

  return count;
}