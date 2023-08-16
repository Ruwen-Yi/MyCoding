/* 
Source: https://www.c0d3.com/curriculum/js3?challenge=94

Write a function that takes in an array of numbers and a number, and returns true if any pairs add up to the number. (The numbers in the array is not unique, meaning there may be duplicate numbers)

solution([1,2,22,333,23], 25)   // returns true
solution([1,2,22,333,23], 24)   // returns true
*/

function solution(arr, targetSum) {
    const set = new Set();

    for (let num of arr) {
        let complement = targetSum - num;   // calculate the complement num we need
        
        if (set.has(complement)) return true;   // check if the complement num is in the set
        
        set.add(num);   // store the current num in set for further verification.
    }

    return false;
}

module.exports = {solution};