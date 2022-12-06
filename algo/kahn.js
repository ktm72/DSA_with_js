//topological sort
const elements = [
  { name: "socks", degree: 0 },
  { name: "shoes", degree: 2, dependsOn: ["socks", "pants"] },
  { name: "office", degree: 2, dependsOn: ["shoes", "jacke"] },
  { name: "shirt", degree: 0 },
  { name: "jacket", degree: 1, dependsOn: ["shirt"] },
  { name: "pants", degree: 0 },
];

const sortByKahn = (elementsArr) => {
  const sortedQueue = [];
  //put all node of deg 0 on queue
  const queue = elementsArr.filter((el) => el.degree === 0);
  const array = elementsArr.filter((el) => el.degree !== 0);
  const arrLen = array.length;
  while (queue.length) {
    //dequeue from queue
    const currNode = queue.shift();
    if (!currNode) {
      queue.length = 0;
    } else {
      sortedQueue.push(currNode);
      //check which node depends on currNode
      for (let i = 0; i < arrLen; i++) {
        const elem = array[i];
        //if we find dep of elem, we will decrease deg by 1
        const hasDepOnCurrNode = !!elem.dependsOn.find(
          (dep) => dep === currNode.name
        ); //!! boolean
        if (hasDepOnCurrNode) {
          array[i].degree--;
          //if deg becomes 0, put it on queue
          if (array[i].degree === 0) {
            //enqueue
            queue.push(array[i]);
          }
        }
      }
    }
  }
  return sortedQueue();
};
