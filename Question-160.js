// 160. Intersection of Two Linked Lists

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    // Optimized Solution
    if (!headA || !headB) return null;
    let a = headA;
    let b = headB;

    while (a !== b) {
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }

    return a;

    // Brute Froce Solution
    // let a = headA;
    // let b = headB;
    // let hashMap = new Map();

    // while(a || b){
    //     if(a === b) return a;
    //     if(hashMap.get(a) === 'b') {
    //         return a
    //     };
    //     if(hashMap.get(b) === 'a'  ) {
    //          return b
    //     };

    //     hashMap.set(a, 'a');
    //     hashMap.set(b, 'b');
    //     a = a?.next;
    //     b = b?.next;
    // }
    // return null;
};
