// 2. Add Two Numbers

var addTwoNumbers = function (l1, l2) {
  let dummyNode = new ListNode(0);
  let current = dummyNode;
  let carry = 0;

  while (l1 || l2 || carry) {
    let v1 = l1 ? l1.val : 0;
    let v2 = l2 ? l2.val : 0;

    let newDigit = v1 + v2 + carry;

    carry = Math.floor(newDigit / 10);

    newDigit = newDigit % 10;

    current.next = new ListNode(newDigit);

    current = current.next;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return dummyNode.next;
};
