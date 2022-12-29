var recoverFromPreorder = function (traversal) {
  //regEx+recursive
  //   let n = traversal.length;
  //   //   depth=0 -> find '-'  as splitter
  //   //   depth=1 -> find '--' as splitter
  //   //   depth=2 -> find '---' as splitter
  //   let dfs = (str, depth) => {
  //     if (str.indexOf("-") === -1) return new TreeNode(str);

  //     // 1. We split by the depth+1 number of '-'
  //     // Using regex to split is much easier. -> str.split(/(?<=\d)-(?=\d)/g)
  //     // where (?<=\d)  means positive lookbehind , ex: "1- ...", then we'll split '-' excluding 1.
  //     // Similarly , (?=\d) means positive lookahead , ex: "-5 ...",  then we'll split '-' excluding 5.
  //     let re = new RegExp(`(?<=\\d)${"-".repeat(depth + 1)}(?=\\d)`, "g");
  //     let [val, leftStr, rightStr] = str.split(re);
  //     // ex: 1-2--3--4-5--6--7 --> ['1','2--3--4','5--6--7']

  //     // 2. After splitting,  we'll get [val,leftStr,rightStr]
  //     // Then we could handle left / right node in the next dfs layer intuitively.
  //     let node = new TreeNode(val);
  //     if (leftStr) node.left = dfs(leftStr, depth + 1);
  //     if (rightStr) node.right = dfs(rightStr, depth + 1);

  //     return node;
  //   };

  //   return dfs(traversal, 0);

  let reg = /(-*)(\d+)/gm;
  let matches = null;
  let map = {}; //stack=[]
  //   let tree;
  while ((matches = reg.exec(traversal))) {
    let depth = matches[1].length;
    let val = parseInt(matches[2]);

    const node = new TreeNode(val);
    // stack.push(node); // if(depth===0) tree = node;
    const parent = map[depth - 1];
    if (parent) {
      if (parent.left === null) {
        parent.left = node;
      } else {
        parent.right = node;
      }
    }
    map[depth] = node;
  }
  return map[0];
};
