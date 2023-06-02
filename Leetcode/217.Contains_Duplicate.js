/* 
Source: https://leetcode.com/problems/contains-duplicate/description/
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	let set = new Set();
	
	for (let num of nums) {
		if (set.has(num)) {
            return true;
        }

		set.add(num);
	}
    
	return false;
};

