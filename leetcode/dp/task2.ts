var taskSchedulerII = function (tasks: number[], space: number): number {
  const n = tasks.length;
  let days = 0;
  // const track = new Map();
  // for(let i = 0; i< n; i++){
  //     if(!track.has(tasks[i])){
  //         track.set(tasks[i], ++days);
  //     } else {
  //         let nextTime = space + track.get(tasks[i]);
  //         if(days < nextTime) days = nextTime
  //         track.set(tasks[i], ++days);
  //     }
  // }

  // return days;
  const schedule: number[] = [];

  for (let i = 0; i < n; i++) {
    const task = tasks[i];
    if (schedule[task] > days) {
      days += schedule[task] - days;
    }
    days++;
    schedule[task] = days + space;
  }

  return days;
};
