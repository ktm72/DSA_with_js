// var checkInclusion = function (s1, s2) {
//   let len1 = s1.length,
//     len2 = s2.length;
//   if (len1 > len2) return false;
//   let s1Count = new Array(26).fill(0);
//   let s2Count = new Array(26).fill(0);
//   //count freq of char relative to s1 length
//   //window length
//   for (let i in s1) {
//     //populate count array
//     let a = "a".charCodeAt(0);
//     s1Count[s1.charCodeAt(i) - a]++;
//     s2Count[s2.charCodeAt(i) - a]++;
//   }

//   let matches = 0;
//   for (let i = 0; i < 26; i++) {
//     //num of position that remains 0
//     if (s1Count[i] === s2Count[i]) matches++;
//   }
//   let left = 0;
//   //traverse through the s2
//   for (let right = len1; right < len2; right++) {
//     //if matches become 26
//     if (matches === 26) return true;
//     //right move
//     let index = s2.charCodeAt(right) - "a".charCodeAt(0);
//     s2Count[index]++;
//     if (s1Count[index] === s2Count[index]) matches++;
//     else if (s1Count[index] + 1 === s2Count[index]) matches--;
//     //left move
//     index = s2.charCodeAt(left) - "a".charCodeAt(0);
//     s2Count[index]--;
//     if (s1Count[index] === s2Count[index]) matches++;
//     else if (s1Count[index] - 1 === s2Count[index]) matches--;
//     left++;
//   }
//   return matches === 26;
// };

var checkInclusion = function (s1, s2) {
  //create hashmap
  const map = {};
  //window length
  let count = s1.length;
  //populate hashmap
  for (const c of s1) {
    if (!map[c]) map[c] = 0;
    map[c]++;
  }

  let l = 0;
  let currPos = 0;
  while (currPos < s2.length) {
    const c = s2[currPos];
    //char of s2 is in map
    if (map[c]) {
      if (count === s1.length) l = currPos; //move left pointer to current position
      //decrease freq of that char by 1
      map[c]--;
      count--;
      //count becomes 0 means all char is in s2
      if (count === 0) return true;
      currPos++;
    } else {
      //count remains same means there's no match
      if (count === s1.length) {
        currPos++; //move currPos right
      } else {
        map[s2[l]]++;
        count++;
        l++;
      }
    }
  }

  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));

// var checkInclusion = function (s1, s2) {
//   if (s1.length > s2.length) return false;
//   let wLen = s1.length,
//     matched = 0;
//   const counter = new Counter(s1);
//  let cSize = Object.keys(counter).length;
//   for (let i in s2) {
//     let ch = s2[i];
//     if (ch in counter) {
//       counter[ch] -= 1;
//       if (counter[ch] === 0) matched += 1;
//     }
//     let leftPointCh = s2[i - wLen];
//     if (i >= wLen && leftPointCh in counter) {
//       if (counter[leftPointCh] === 0) matched -= 1;
//       counter[leftPointCh] += 1;
//     }
//     if (matched === cSize) return true;
//   }
//   return false;
// };
// function Counter(values) {
//   let count = {};
//   for (let val of values) {
//     count[val] = (count[val] || 0) + 1;
//   }
//   return count;
// }
