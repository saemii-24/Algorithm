function solution(s) {
  const arr = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']')); 
  arr.sort((a, b) => a.length - b.length);                         
  
  const seen = new Set();                                        
  const result = [];

  for (const sub of arr) {
    for (const num of sub) {
      if (!seen.has(num)) {
        seen.add(num);
        result.push(num);
      }
    }
  }

  return result;
}
