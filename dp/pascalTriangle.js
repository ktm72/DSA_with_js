// function memoise(fn) {
//   const cache = {};
//   return (...agrs) => {
//     if (agrs.toString() in cache) {
//       console.log("from cache");
//       return cache[agrs.toString()];
//     }
//     const result = fn(...agrs);
//     cache[agrs.toString()] = result;
//     return result;
//   };
// }
let calculation = 0;
// function pascalTriangle(numRows) {
//   if (numRows < 1) return [];
//   //   if (numRows === 1) return [[1]];
//   //   if (numRows === 2) return [[1], [1, 1]];

//   //   let final=[[1]];
//   //     for(let i=0;i<numRows-1;i++){
//   //         let prevVal = final[final.length - 1];
//   //         let row = [1];
//   //         for (let j = 1; j < prevVal.length; j++) {
//   //             row.push(prevVal[j]+prevVal[j-1]);
//   //         }
//   //         row.push(1);
//   //         final.push(row);
//   //     }
//   //     return final;

//   //dp
//   //   const p = [];
//   //   for (let i = 0; i < numRows; i++) {
//   //     p[i] = [];
//   //     for (let j = 0; j <= i; j++) {
//   //       /*
//   //        * pascal cell is either 1 (on border or diagonal) or top-left cell + top cell
//   //        */
//   //       p[i][j] =
//   //         j === 0 || i === 0 || i === j ? 1 : p[i - 1][j - 1] + p[i - 1][j];
//   //     }
//   //   }
//   //   return p;

//   //recursive
//   calculation++;
//   if (numRows === 1) return [[1]];
//   //say numRows = 2;
//   const prevVal = pascalTriangle(numRows - 1); // pascalTriangle(2 -1)-> [[1]], len->1

//   const lastRowOfPrev = prevVal[prevVal.length - 1]; //nR=2, prevVal[1-1] -> [1] , len ->1
//   const currentValue = lastRowOfPrev.reduce(
//     (acc, num, i) => {
//       //nR=2, lastRowOfPrev[0+1] -> undefined
//       if (lastRowOfPrev[i + 1] != undefined) {
//         acc.push(lastRowOfPrev[i] + lastRowOfPrev[i + 1]);
//       } else {
//         //nR=2, acc = [1, pushed 1]
//         acc.push(1);
//       }
//       return acc; // [1, 1]
//     },
//     [1]
//   ); //nR =2, [1, 1]
//   const result = [...prevVal, currentValue]; //nR=2, [...[[1]], [1,1] ] -> [[1], [1,1]]
//   return result;
// }

const memoisePascalStep = () => {
  let prevVal;
  return function pascalTriangle(numRows) {
  	let currentValue =[1];
    if (numRows < 1) return [];
    if (numRows === 1) return [currentValue];
    //say numRows = 2;
      prevVal = pascalTriangle(numRows - 1); // pascalTriangle(2 -1)-> [[1]], len->1
    const lastRowOfPrev = prevVal[prevVal.length - 1]; //nR=2, prevVal[1-1] -> [1] , len ->1
//    const currentValue = lastRowOfPrev.reduce(
//      (acc, num, i) => {
//        //nR=2, lastRowOfPrev[0+1] -> undefined
//        if (lastRowOfPrev[i + 1] != undefined) {
//          acc.push(lastRowOfPrev[i] + lastRowOfPrev[i + 1]);
//        } else {
//          //nR=2, acc = [1, pushed 1]
//          acc.push(1);
//        }
//        return acc; // [1, 1]
//      },
//      [1]
//    ); //nR =2, [1, 1]
	for(let i =0; i < lastRowOfPrev.length; i++){
        if (lastRowOfPrev[i + 1] != undefined) {
        currentValue.push(lastRowOfPrev[i]+lastRowOfPrev[i + 1])
        } else {
          currentValue.push(1);
        }
    }
    const result = [...prevVal, currentValue]; //nR=2, [...[[1]], [1,1] ] -> [[1], [1,1]]
    return result;
  };
};

// const memoisedPascal = memoise(pascalTriangle);
// console.log(memoisedPascal(5));
const memoisedPascal = memoisePascalStep();
console.log(memoisedPascal(5));
console.log("we run pascal func " + calculation + " times");
// console.log(memoisePascal(10));
