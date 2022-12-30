var getOrder = function (tasks) {
  const n = tasks.length,
    priorAssign = 1e5;
  const result = new Array(n);
  const minPQ = new MinPriorityQueue();
  for (let i = 0; i < tasks.length; ++i) {
    tasks[i].push(i); // keep index with it
  }
  tasks.sort((a, b) => a[0] - b[0]); //sort by enqueuing time
  let t = tasks[0][0]; //smallest enqueue time
  let idx = 0;
  for (let i = 0; i < n; ++i) {
    // cpu is idle, jump to next time
    //all the task that range within this time will be enqueued
    if (minPQ.isEmpty() && t < tasks[idx][0]) t = tasks[idx][0];
    //current time >= enqueue time
    while (idx < tasks.length && t >= tasks[idx][0]) {
      //add those to the MinQueue
      //element, priority
      minPQ.enqueue(tasks[idx], tasks[idx][1] * priorAssign + tasks[idx][2]);
      ++idx;
    }
    let processedTask = minPQ.dequeue().element;
    //how much time has elapsed
    t += processedTask[1];
    //add the index to the result
    result[i] = processedTask[2];
  }
  return result;
};
