class RandomizedSet {
  constructor() {
    //use Array pop, push O(1) but remove besides the last index O(n)
    //use Map to track the index
    //then swap with the last index
    this.nums = [];
    this.indices = new Map();
  }
  insert(val) {
    //already in map
    if (this.indices.get(val) !== undefined) return false;
    const index = this.nums.length;
    this.nums.push(val);
    this.indices.set(val, index);
    return true;
  }
  remove(val) {
    //get index of val
    const index = this.indices.get(val);
    //if not exists
    if (index == null) return false;
    const length = this.nums.length;
    const lastNum = this.nums[length - 1];
    //if val is the lastNum
    if (lastNum === val) {
      this.nums.pop();
      //delete index from Map
      this.indices.delete(val);
      return true;
    }
    //swap lastNum to the index position
    this.nums[index] = lastNum;
    //val to last index
    this.nums[length - 1] = val;
    this.nums.pop();

    //delete index from Map
    this.indices.delete(val);
    //update lastNum index to Map
    this.indices.set(lastNum, index);
    return true;
  }
  getRandom() {
    const index = Math.floor(Math.random() * this.nums.length);
    return this.nums[index];
  }
} // faster than prototype
const randomisedSet = new RandomizedSet();
const firstInsert = randomisedSet.insert(1); //O(1)
console.log(firstInsert);
const checkRemove = randomisedSet.remove(2); //O(1)
console.log(checkRemove);
const newInsert = randomisedSet.insert(2);
console.log(newInsert);
console.log(randomisedSet.getRandom());
console.log(randomisedSet.remove(1));
console.log(randomisedSet.insert(2));
console.log(randomisedSet.getRandom());
