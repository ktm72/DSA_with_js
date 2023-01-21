/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function (intervals, newInterval) {
  let result = [];
  let start = newInterval[0];
  let end = newInterval[1];
  let i = 0;

  // append all intervals before the start
  while (i < intervals.length && intervals[i][1] < start) {
    result.push(intervals[i]);
    i++;
  }

  // append all intervals that are overlaping with the newInterval
  while (i < intervals.length && intervals[i][0] <= end) {
    start = Math.min(start, intervals[i][0]);
    end = Math.max(end, intervals[i][1]);
    i++;
  }
  result.push([start, end]);

  // append all intervals that are not overlapping
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }
  return result;
};
function insert(intervals, newInterval) {
  let result = [];
  for (let i = 0; i < intervals.length; i++) {
    const [s, e] = intervals[i];
    const [ns, ne] = newInterval;
    //no overlapping, before interval start
    if (ne < s) {
      result.push(newInterval);
      return result.concat(intervals.slice(i));
    }
    //after interval end, no overlapping
    else if (ns > e) {
      result.push(intervals[i]);
    } //overlapping, merge
    else {
      // newInterval = [Math.min(ns, s), Math.max(e, ne)];
      newInterval[0] = Math.min(ns, s);
      newInterval[1] = Math.max(e, ne);
    }
  }
  result.push(newInterval);
  return result;
}
