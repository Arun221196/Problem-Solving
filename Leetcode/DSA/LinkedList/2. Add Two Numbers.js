/*
https://leetcode.com/problems/add-two-numbers/description/

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1] */


// *
//  * Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let dummyHead = new ListNode();
    let currNode = dummyHead;
    let carry = 0;
    while (l1 || l2 || carry) {
        let l1Val = l1 !== null ? l1.val : 0;
        let l2Val = l2 !== null ? l2.val : 0;
        let sum = l1Val + l2Val + carry;
        currNode.next = new ListNode(sum % 10);
        currNode = currNode.next;
        carry = sum > 9 ? 1 : 0;
        if(l1 !== null) l1 = l1.next;
        if(l2 !== null) l2 = l2.next;
    }
    return dummyHead.next;
};

// var addTwoNumbers = function(l1, l2) {
//     function revSum(list){
//         if(!list.next){
//             return list.val;
//         }
//         return '' + revSum(list.next) + list.val;
//     }
//     let l1Sum = revSum(l1);
//     let l2Sum = revSum(l2);
//     let sum = Number(l1Sum) + Number(l2Sum);
//     if(sum === 0){
//         return new ListNode(0);
//     }
//     console.log(sum)
//     let sumNode = new ListNode(0);
//     let current = sumNode;
//     while(sum){
//         let num = sum % 10;
//         sum = parseInt(sum / 10);
//         console.log('sum num',sum,num)

//         current.next = new ListNode(num, null);
//         current = current.next;

//     }
//     console.log('sumNode',sumNode.next);
//     return sumNode.next;
// };