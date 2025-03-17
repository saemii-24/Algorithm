class Queue {
  items = [];
  front = 0;
  rear = 0;

  firstValue() {
    return this.items[this.front];
  }

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  size() {
    return this.rear - this.front;
  }

  pop() {
    return this.items[this.front++];
  }
}

function solution(progresses, speeds) {
  const queue = new Queue();
  let result = [];

  for (let i = 0; i < progresses.length; i++) {
    queue.push([progresses[i], speeds[i]]);
  }

  while (queue.size() > 0) {
    let cnt = 0;

    for (let i = 0; i < queue.size(); i++) {
      queue.items[queue.front + i][0] += queue.items[queue.front + i][1];
    }

    while (queue.size() > 0 && queue.firstValue()[0] >= 100) {
      queue.pop();
      cnt++;
    }

    if (cnt > 0) {
      result.push(cnt);
    }
  }

  return result;
}