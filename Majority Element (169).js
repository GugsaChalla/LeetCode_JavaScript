/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((n1, n2) => n1-n2)
    return nums[Math.floor(nums.length/2)]
};
