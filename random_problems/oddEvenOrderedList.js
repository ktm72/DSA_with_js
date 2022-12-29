//singly linked List
/**
 *
 * @param {*} head
 * @returns reordered list -> all the odds together then rest of the evens
 */
function oddEvenList(head) {
  if (!head) return head;
  let currentOdd = head;
  let evenHead = head.next;
  let currentEven = evenHead;
  while (currentEven && currentEven.next) {
    currentOdd.next = currentEven.next; //odd
    currentOdd = currentOdd.next; //update currOdd with next odd
    currentEven.next = currentOdd.next; //even
    currentEven = currentEven.next; //update currEven with next even
  }
  currentOdd.next = evenHead;
  return head;
}
