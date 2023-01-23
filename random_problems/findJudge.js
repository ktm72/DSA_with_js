/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
// find the number everyone trusts
// and find the number that trusts nobody
// if the numbers of the two conditions above exists and are equal
// and the there is no trust[i][0] that matches the value of the statements above
// return the number else return -1
var findJudge = function (n, trust) {
  if (n === 1) return 1;
  // n is number of ppl in the town, start at 1
  // let trustMap = new Map()
  // let trustIssue = new Array(n+1).fill(1)

  // for(let x =0; x<trust.length;x++){
  //     const [ a ,b] = trust[x]
  //     trustIssue[a] = 0;
  //     trustMap.set(b, (trustMap.get(b) || 0) + 1 )
  // }

  // for ( let [key,value] of trustMap){
  //     if(value === n-1){
  //         if(trustIssue[key] === 1){
  //             return key
  //         }
  //     }
  // }
  let maxTrustFreq = -Infinity,
    trustFreq = new Map();

  for (const [_, trustee] of trust) {
    trustFreq.set(trustee, (trustFreq.get(trustee) || 0) + 1);

    // Find running max trust value
    const freq = trustFreq.get(trustee);
    if (freq > maxTrustFreq) {
      maxTrustFreq = freq;
    }
  }

  const trustBank = new Map(trust);
  for (let i = 1; i <= n; i++) {
    //judge has everyones trust
    if (!trustBank.has(i) && maxTrustFreq === n - 1) return i;
  }
  return -1;
};
