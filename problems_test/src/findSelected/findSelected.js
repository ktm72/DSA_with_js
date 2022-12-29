function findSelected(data, selected) {
  // let results = [];
  // for (let i = 0; i < selected.length; i++) {
  //   let tag = selected[i];
  //   const getData = data.filter(
  //     (obj) => obj.num.toLowerCase() === tag.toLowerCase()
  //   );
  //   results = [...results, ...getData];
  // }
  // console.log(results);//O(n*2)
  let lowerCaseTags = selected.map((item) => {
    if (typeof item === "string") item.toLowerCase();
  });
  const reducer = (acc, curr) => {
    if (lowerCaseTags.includes(curr.num.toLowerCase())) {
      acc.push(curr);
    }
    return acc;
  };
  const found = data.reduce(reducer, []);
  return found; //O(n)
}
module.exports = findSelected;
