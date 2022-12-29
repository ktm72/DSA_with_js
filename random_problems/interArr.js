function Intersection(nums1, nums2, arr = []) {
  //   return nums1.reduce((a, c) => {
  //   if (nums2.includes(c)) {
  //     a = [...a, c];
  //     nums2.splice(nums2.indexOf(c), 1);
  //   }
  //   return a;
  // }, []);// O(m*n);
  //   const map = new Map();
  //     for(let n of nums1)
  //           map.set(n, (map.get(n) || 0) + 1);

  //     for(let m of nums2)
  //         if(map.get(m) > 0) {
  //             arr.push(m);
  //             map.set(m, map.get(m)  - 1);
  //         }

  //     return arr;
  //   let a1 = nums1.sort((a,b)=> a-b);
  //   let a2 = nums2.sort((a,b)=> a-b);
  //   let result = [];
  //   while(a1.length && a2.length){
  //       if(a1[a1.length-1] === a2[a2.length-1]){
  //           result.push(a2.pop());
  //           a1.pop();
  //       }
  //       else if(a1[a1.length-1] > a2[a2.length-1]){
  //           a1.pop();
  //       }else{
  //           a2.pop();
  //       }
  //   }
  //   return result;//memory
  let obj = {};
  // obj[i] = obj[i] ? obj[i]+1 : 1
  for (let n of nums1) obj[n] = (obj[n] || 0) + 1;
  for (let m of nums2)
    if (obj[m]) {
      obj[m]--;
      arr.push(m);
    }

  return arr; //O(n+m)
}
