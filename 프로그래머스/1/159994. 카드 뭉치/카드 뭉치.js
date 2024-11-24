function solution(cards1, cards2, goal) {
  let [cdx1, cdx2, gdx] = [0, 0, 0];

  while (gdx < goal.length) {
    if (cards1[cdx1] === goal[gdx]) {
      cdx1++;
      gdx++;
    } else if (cards2[cdx2] === goal[gdx]) {
      cdx2++;
      gdx++;
    } else {
      return "No";
    }
  }
  return "Yes";
}
