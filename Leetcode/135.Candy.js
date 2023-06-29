/* 
Source: https://leetcode.com/problems/candy/

There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.


Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.


Input: ratings = [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.

Point: greedy algorithm
*/

/* 
conclusion:
initialize the allocation to 1, perform two iterations, and update the candy for neighbors:
1. left->right if the right neighbor has a higher rate, the right neighbor has candy: the current place + 1.
2. right->left if the left neighbor has a higher rate but lower candy, the left neighbor has candy: the current place + 1.
*/

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let allocation = Array(ratings.length).fill(1);

    for (let i = 0; i < ratings.length-1; i++) {
        if (ratings[i+1] > ratings[i]) {
            allocation[i+1] = allocation[i] + 1;
        }
    }

    for (let i = ratings.length-1; i > 0; i--) {
        if ((ratings[i-1] > ratings[i]) && (allocation[i-1] <= allocation[i])) {
            allocation[i-1] = allocation[i] + 1;
        }
    }

    let result = allocation.reduce((sum, curr)=>sum+curr)
    
    return result;
};