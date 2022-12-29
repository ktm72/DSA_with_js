function reverseList(head) {
  //   if (!head) return head;
  //   let curr = head;
  //   if (head.next) {
  //     curr = reverseList(head.next);
  //     head.next.next = head;
  //   }
  //   head.next = null;
  //   return curr;
  //two pointers
  let prev = null,
    curr = head;
  while (curr) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
}
