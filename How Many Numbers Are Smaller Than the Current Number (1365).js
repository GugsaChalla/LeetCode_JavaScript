/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
        var stack = []
        var arr = []
        for(let i=0;i<nums.length;i++){
            let count=0
            stack.push(nums[i])
            for(let j=0;j<nums.length;j++){
                let hold = stack.pop()
                if(hold>nums[j]){count++;}
                stack.push(hold)
            }
            arr[i]=count
            stack.pop()
        }
        return arr

};