/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    maxWater(arr) {
        // code here
        // Naive approach space O(1) Time O(n^2)
        let res = 0;
        let n = arr.length;
        for(let i = 1; i < n - 1; i++){
            // find left max
            let leftMax = arr[i]
            for(let j=0;j<i;j++){
                leftMax = Math.max(leftMax, arr[j]);
            }
            // find right max
            let rightMax = arr[i];
            for(let j=i+1;j<n;j++){
                rightMax = Math.max(rightMax, arr[j])
            }
            let min = Math.min(leftMax, rightMax);
            res = res + (min - arr[i]);
        }
        return res;
    }
    maxWater1(arr) {    
        // Prefix sufix max of each index space O(n) time O(n)
        let res = 0;
        let n = arr.length;
        let leftMax = Array(n);
        let rightMax = Array(n);
        // fill array with max of left
        leftMax[0] = arr[0];
        for(let i=1;i<n;i++){
            leftMax[i] = Math.max(arr[i], leftMax[i-1]);
        }
        // fill array with max of right
        rightMax[n-1] = arr[n-1];
        for(let i = n-2; i>=0; i--){
            rightMax[i] = Math.max(arr[i], rightMax[i+1])
        }
        // calc acumulated water
        for(let i=1;i<n-1;i++){
            let min = Math.min(leftMax[i],rightMax[i]);
            res += min - arr[i];
        }
        return res;
    }
    maxWater2(arr) {   
        // Two pointer technique space O(1) Time O(n)
        let res = 0;
        let n = arr.length;
        let lMax = arr[0];
        let rMax = arr[n-1];
        let left = 1;
        let right = n-2;
        while(left <= right){
            // If rMax is smaller, then we can decide the 
            // amount of water for arr[right]
            if(rMax < lMax) {
                res += Math.max(0, rMax - arr[right]);
                rMax = Math.max(rMax, arr[right]);
                right--;
            }
            else {
                res += Math.max(0, lMax - arr[left]);
                lMax = Math.max(lMax, arr[left]);
                left++;
            }
        }
        return res;
    }
}