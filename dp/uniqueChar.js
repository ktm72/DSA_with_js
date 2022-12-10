function firstUniqChar(s) {
    if(s.length ===0) return -1;
    let map = new Map();
    for(let i = 0; i<s.length; i++){
        const ch = s[i];
        map = map.set(ch, (map.get(ch) ||0)+1);
    }
    for (const [key, value] of map) {
        if(value ===1) return s.indexOf(key);
    }
    return -1;
};//O(n)

console.log(firstUniqChar('leetcodelove'));
