function middleNode(head) {
  //count length
  let count = 0;
  let head1 = head,
    head2 = head;
  //   while (head1 !== null) {
  //     count++;
  //     head1 = head1.next;
  //   }
  //   let mid = ~~(count / 2);
  //   while (mid) {
  //     head2 = head2.next;
  //     mid--;
  //   }
  //hare & tortoise method
  while (head1 && head1.next) {
    head1 = head1.next.next; //fast jump
    head2 = head2.next;
  }
  return head2; //O(n)
}
