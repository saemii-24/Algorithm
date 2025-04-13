function makeTree(n, wires) {
  let tree = new Array(n + 1).fill().map(() => []);
  for (let wire of wires) {
    let [cur, link] = wire;
    tree[cur].push(link);
    tree[link].push(cur);
  }

  return tree;
}

function dfs(node, tree, visited) {
  // node = 현재 탐색하고 있는 송전탑 번호
  // dfs가 시작되는 노드
  visited[node] = true;
  let count = 1;
  //dfs가 실행되는 순간, 즉 새로운 노드를 살펴보는 순간 어떤 값이 변해야 할까?
  //이 문제에서는 각 노드를 방문할 떄마다 서브트리의 크기를 계산해야 한다.
  for (let neighbor of tree[node]) {
    if (!visited[neighbor]) {
      count += dfs(neighbor, tree, visited);
    }
  }
  return count;
}

function solution(n, wires) {
  let minDiff = Number.MAX_VALUE;

  //트리를 만든다.
  let tree = makeTree(n, wires);

  //전선을 끊는다 = wires에서 하나를 skip한다.

  for (let i = 0; i < wires.length; i++) {
    let [a, b] = wires[i]; //wires[i]는 끊을(skip할) wire가 된다.

    //끊을 전선 제외한 새로운 트리 생성
    let newWires = wires.filter((_, index) => index !== i);
    let newTree = makeTree(n, newWires);

    // 하나의 부분의 크기 계산
    let visited = new Array(n + 1).fill(false);
    let subTreeSize = dfs(a, newTree, visited);

    // 두 부분의 크기 차이 계산
    let diff = Math.abs(n - 2 * subTreeSize);

    // 최소 차이 갱신
    minDiff = Math.min(minDiff, diff);
  }
    return minDiff
}