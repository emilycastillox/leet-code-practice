/**
 INSTRUCTIONS:

 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].






 P: an array of numbers, and a number which is our target our total sum
 R: the indices of the numbers in the array that when added together, sums up to the target number - an array of 2 indices
 E: [5,3,2,6,1], 9 // [1,3]
 P: 
 loop through the array of elements, and if the element 1 + the next element = to target number, then push the indices to a new array, and return that new array


 */

 
 var twoSum = function(nums, target) {
    let resultIndices = []
    for(i = 0; i < nums.length; i++){
        let sum = nums[i] + nums[i + 1]
        if(sum === target){
            resultIndices.push(i, (i + 1))
        }
    }
    return resultIndices
};


// other solution - nested for loop, On^2

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }

// using map

var twoSum = function(nums, target) {
    let map = new Map(); //creating hash table
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(pairNum)) {
            return [map.get(pairNum), i]
        }     
        map.set(nums[i], i); // insert an element into the table
    }
}

