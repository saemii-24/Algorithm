function solution(elements) {
  const set = new Set();
  const n = elements.length;
  
  const arr = [...elements, ...elements];

  for (let start = 0; start < n; start++) {
    let sum = 0;
    for (let end = start; end < start + n; end++) {
      sum += arr[end];
      set.add(sum); 
    }
  }

  return set.size;
}
