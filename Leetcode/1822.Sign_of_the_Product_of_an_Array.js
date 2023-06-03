/* 
Source: https://leetcode.com/problems/sign-of-the-product-of-an-array/description/

There is a function signFunc(x) that returns:

1 if x is positive.
-1 if x is negative.
0 if x is equal to 0.
You are given an integer array nums. Let product be the product of all values in the array nums.

Return signFunc(product).
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let product = nums.reduce((product,current)=>{
        product *= current;
        return product > 0 ? 1 : (product === 0 ? 0 : -1);
    },1)

    return product;
};