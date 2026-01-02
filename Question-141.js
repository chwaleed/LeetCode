// 141. Linked List Cycle

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

function hasCycle(head: ListNode | null): boolean {
    // Optimized Solution
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next

        if(slow === fast) return true;
    }

    return false;

    // Brute Force Solution
    // let node = head;
    // let set = new Set()

    // while(node){
    //     if(set.has(node)){
    //         return true
    //     }
    //     set.add(node)
    //     node = node.next;
    // }
    // return false
};


