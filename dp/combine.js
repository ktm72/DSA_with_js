var combine = function (n, k) {
  let combs = [];
  function dfs(start, curr) {
    //base case
    if (curr.length === k) combs.push([...curr]);
    for (let i = start; i <= n; i++) {
      curr.push(i);
      dfs(i + 1, curr);
      curr.pop();
    }
    // if(curr.length == k) {
    //     combs.push(curr);
    //     return;
    // }
    // for(let i = start; i <= n; i++) {
    //     dfs(i+1,[...curr, i]);
    // }
  }
  dfs(1, []);
  return combs;
};
console.log(combine(4, 2));
