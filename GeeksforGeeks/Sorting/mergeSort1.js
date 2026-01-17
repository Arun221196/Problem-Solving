/**
 * @param {number[]} arr
 * @param {number} l
 * @param {number} r
 */
class Solution {
    mergeSort(arr, l, r) {
        // code here
        if(arr.length <= 1) return arr;
        let mid = Math.floor(arr.length / 2);
        let left = this.mergeSort(arr.slice(0, mid));
        let right = this.mergeSort(arr.slice(mid));
        return this.merge(left, right);
    }
    merge(left, right){
        let result = [];
        let i = 0, j = 0;
        while(i < left.length && j < right.length){
            if(left[i] < right[j]){
                result.push(left[i]);
                i++;
            }
            else{
                result.push(right[j]);
                j++;
            }
        }
        while(i < left.length){
            result.push(left[i]);
            i++;
        }
        while(j < right.length){
            result.push(right[j]);
            j++;
        }
        return result;
    }
}
a=[4,2,1,3];
let sort = new Solution();
sort.mergeSort(a);