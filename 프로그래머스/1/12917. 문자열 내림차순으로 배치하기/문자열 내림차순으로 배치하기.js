function solution(s) {
  const splitS = s.split('').sort((a,b)=>b.charCodeAt(0)-a.charCodeAt(0));
  return splitS.join('');
}