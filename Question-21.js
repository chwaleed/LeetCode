// 21. Merge Two Sorted Lists

var mergeTwoLists = function (list1, list2) {
  let dummyNode = new ListNode(0);

  let current = dummyNode;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 === null ? list2 : list1;

  return dummyNode.next;
};
