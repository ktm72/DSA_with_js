const selected = ["one", "Three"];

const data = [
  {
    id: 1,
    num: "one",
    living: false,
  },
  {
    id: 2,
    num: "one",
    living: true,
  },
  {
    id: 3,
    num: "two",
    living: false,
  },
  {
    id: 4,
    num: "three",
    living: true,
  },
  {
    id: 5,
    num: "two",
    living: true,
  },
  {
    id: 6,
    num: "one",
    living: false,
  },

  {
    id: 7,
    num: "two",
    living: false,
  },
];

function findSelected(data, selected) {
  // let results = [];
  // for (let i = 0; i < selected.length; i++) {
  //   let tag = selected[i];
  //   const getData = data.filter(
  //     (obj) => obj.num.toLowerCase() === tag.toLowerCase()
  //   );
  //   results = [...results, ...getData];
  // }
  // console.log(results);
  let lowerCaseTags = selected.map((item) => item.toLowerCase());
  const reducer = (acc, curr) => {
    if (lowerCaseTags.includes(curr.num.toLowerCase())) {
      acc.push(curr);
    }
    return acc;
  };
  const found = data.reduce(reducer, []);
  console.log(found);
}

findSelected(data, selected);
