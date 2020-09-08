/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arr=[];
    arr.push(nums[0]);
    for(let i=1;i<nums.length;i++){
        arr.push(nums[i]+arr[i-1]);
    }
    return arr;
};