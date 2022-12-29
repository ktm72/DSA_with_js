var deleteDuplicates = function (head) {
  //   let curr = head;
  //   while (curr) {
  //     while (curr.next && curr.val === curr.next.val) {
  //       curr.next = curr.next.next;
  //     }
  //     curr = curr.next;
  //   }
  //   return head;
  //recursive
  if (head && head.next && head.val == head.next.val)
    head = deleteDuplicates(head.next);
  else if (head && head.next) head.next = deleteDuplicates(head.next);
  return head;
};
//sorted one
