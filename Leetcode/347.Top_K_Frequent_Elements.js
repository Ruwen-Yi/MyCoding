/* 
Source: https://leetcode.com/problems/top-k-frequent-elements/

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Input: nums = [1], k = 1
Output: [1]

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // create a map: keys are integers in nums, values are their occurence
    let map = new Map();
    nums.map(item =>{
        return map.set(item, (map.get(item) || 0) + 1) 
    });

    // transfer the map into a two dimensional array
    // sort in reverse order based on the occurrence of integers
    let arr = Array.from(map);
    arr.sort((a, b)=>{
        return b[1] - a[1];
    });

    // get the integer part of the first k elements in the sorted array
    let kMost = arr.slice(0,k).map(item => {
        return item[0];
    });

    return kMost;
};