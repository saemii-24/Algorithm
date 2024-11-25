function solution(s, skip, index) {
  //주어진 글자를 아스키코드 배열로 변경한다.
  const asciiArray = s.split("").map((char) => char.charCodeAt(0));
  //건너뛰어야 하는 글자를 아스키코드 배열로 변경한다.
  const skipArray = skip.split("").map((char) => char.charCodeAt(0));
  //정해진 index만큼 더하되, 건너뛰어야 하는 경우 건너뛰도록 한다.
  for (let i = 0; i < asciiArray.length; i++) {
    let plusIndex = 0;
    while (plusIndex < index) {
      asciiArray[i] = ((asciiArray[i] + 1 - 97) % (122 - 97 + 1)) + 97; //순환계산
      if (!skipArray.includes(asciiArray[i])) plusIndex++;
    }
  }
  //최종 문자를 변경한다.
  return asciiArray.reduce((acc, cur) => acc + String.fromCharCode(cur), "");
}