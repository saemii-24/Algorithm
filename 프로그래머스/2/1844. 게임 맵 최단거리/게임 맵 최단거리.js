class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  enqueue(item) {
    this.queue.push(item);
    this.rear++;
  }
  dequeue() {
    const item = this.queue[this.front];
    this.front++;
    return item;
  }
  isEmpty() {
    return this.front === this.rear;
  }
  size() {
    return this.rear - this.front;
  }
  first() {
    return this.queue[this.front];
  }
  last() {
    return this.queue[this.rear - 1];
  }
}

function solution(maps) {
  let visited = Array.from({ length: maps.length }, () =>
    Array(maps[0].length).fill(false)
  );

  const move = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const n = maps.length;
  const m = maps[0].length;

  function bfs(start) {
    const q = new Queue();
    q.enqueue([start[0], start[1], 1]);
    visited[start[0]][start[1]] = true;

    while (!q.isEmpty()) {
      const here = q.dequeue();

      const x = here[0];
      const y = here[1];
      const distance = here[2];

      if (x === n - 1 && y === m - 1) {
        return distance;
      }

      for (const [dx, dy] of move) {
        const row = x + dx;
        const column = y + dy;

        if (
          row < 0 ||
          row >= n ||
          column < 0 ||
          column >= m ||
          visited[row][column] ||
          maps[row][column] === 0
        ) {
          continue;
        }

        visited[row][column] = true;
        q.enqueue([row, column, distance + 1]);
      }
    }
    return -1;
  }

  return bfs([0, 0]);
}