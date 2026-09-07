/**
 * https://www.geeksforgeeks.org/problems/parenthesis-checker2744/1
 * @param {string} s
 * @returns {boolean}
 */

class Solution {
    isBalanced(s) {
        // code here
        let stack = [];
        let obj = {
            ']' : '[',
            '}' : '{',
            ')' : '('
        }
        for(let i of s) {
            if(i === '[' || i === '{' || i === '('){
                stack.push(i);
            }
            else{
                let len = stack.length;
                if(len !== 0 && obj[i] === stack[len-1]) {
                    stack.pop();
                }
                else{
                    stack.push(i);
                }
            }
        }
        return stack.length === 0;
    }
}
