// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Solution doesn't work for all cases
// let twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//       if (nums[i] + nums[i+1] === target) {
//         return [i, i+1];
//       }
//     }
//   }


//New solution works for all cases with a runtime of O(n^2)
// let twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (!(i === j) && nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// }

//Final solution works for all cases with a good runtime 
let twoSum = function (nums, target) {

    let hash = {}

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        if (diff in hash) {
            return [i, hash[diff]];
        } else {
            hash[nums[i]] = i;
        }
    }
}

console.log(twoSum([3, 2, 4], 6));

//twoSum([2,7,11,15], 9) --> [0,1]
//twoSum([3,2,4], 6) --> [1,2]
//twoSum([3,3], 6) --> [0,1]