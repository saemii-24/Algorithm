function solution(s) {
  let stack = [];
  let splitS = s.split("");

  for (let i = 0; i < splitS.length; i++) {
    if (s[i] == "(") stack.push("(");
    else if (s[i] == ")" && stack.length > 0 && stack[stack.length - 1] == "(")
      stack.pop();
    else return false;
  }
  return stack.length === 0;
}