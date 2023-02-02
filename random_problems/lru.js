class LRUCache {
  constructor(capacity) {
    this.map = new Map();
    this.capacity = capacity;
  }
  get(key) {
    return this.map.has(key) ? this.put(key, this.map.get(key)) : -1;
  }
  put(key, value) {
    if (this.map.has(key)) this.map.delete(key);

    this.map.set(key, value);

    if (this.map.size > this.capacity) {
      this.map.delete(this.map.keys().next().value);
    }
    return value;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class Node {
  constructor(key, val, next, prev) {
    this.key = key === undefined ? 0 : key;
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.prev = prev === undefined ? null : prev;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  let hash = {};
  let size = 0;
  let cap = capacity;
  let head = new Node();
  let tail = new Node();

  head.next = tail;
  tail.prev = head;

  this.size = size;
  this.hash = hash;
  this.cap = cap;
  this.head = head;
  this.tail = tail;
};

LRUCache.prototype.remove = function (node) {
  let prev = node.prev;
  let next = node.next;
  prev.next = next;
  next.prev = prev;
};

LRUCache.prototype.insert = function (node) {
  node.next = this.tail;
  node.prev = this.tail.prev;
  this.tail.prev.next = node;
  this.tail.prev = node;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let node = this.hash[key];
  if (node) {
    this.remove(node);
    this.insert(node);
    return node.val;
  }

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let node = this.hash[key];

  if (node) {
    this.remove(node);
    node.val = value;
    this.insert(node);
  } else {
    if (this.size === this.cap) {
      let evict = this.head.next;
      this.remove(evict);
      delete this.hash[evict.key];
    }
    if (this.size < this.cap) this.size++;
    node = new Node(key, value);
    this.hash[key] = node;
    this.insert(node);
  }
};
