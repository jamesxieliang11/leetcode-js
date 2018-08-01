// 给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。

// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807


// 递归

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l = new ListNode((l1.val+l2.val)%10);
    let i = ~~((l1.val+l2.val)/10);
    function add(a, b, m){
        if(!a&&!b){
            if(!i){
                return l; 
            }else{
                m.next = new ListNode(i)
                return l;
            }
        }
        let r = a?a.val:0;
        let s = b?b.val:0;
        let j = (r+s+i)%10;
        i = ~~((r+s+i)/10);
        m.next = new ListNode(j);
        add(a&&a.next, b&&b.next, m.next);
        return l;
    }
    return add(l1.next, l2.next, l);
};