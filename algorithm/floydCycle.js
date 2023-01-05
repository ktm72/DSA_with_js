//linked list cycle problem
function hasCycle(head) {
  let fast = head,
    slow = head,
    prev,
    i = 0,
    j = 0,
    cL = 0;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    i += 2;
    j++;
    //circular
    if (slow === fast) {
      //   return true;
      //circular LL length
      cL = j;
      console.log(cL);
      //move j to start
      j = 0;
      slow = head;
      //if slow and fast meet again
      //that's the point circular LL start
      while (slow !== fast) {
        prev = fast;
        //jump one node at a time
        slow = slow.next;
        fast = fast.next;
        j++;
      }
      //circular start index
      //return j;
      //LL length
      console.log(cL + j);
      //remove cycle
      //prev.next = null;
      return slow;
    }
  }
  // return false;
  return null;
}
