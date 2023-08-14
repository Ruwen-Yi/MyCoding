/* 
Source：https://www.c0d3.com/curriculum/js3?challenge=95

Duplicate Numbers
Write a function that takes in an array of numbers, and returns a new array of all duplicate numbers.

solution([1, 2, 2, 3, 1])  // should return [1, 2]
solution([1, 1, 1, 1, 2, 3, 3])  // should return [3, 1]
solution([-1, 2, -1, 3, 4, -2, 4])  // should return [-1, 4]
*/

function solution(arr) {
  let count = arr.reduce((acc, item, index)=>{
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  },{})

  let duplicatedNum = [];
  for (let key in count) {
    if(count[key] > 1) duplicatedNum.push(+key);
  }

  return duplicatedNum;
}

module.exports = {solution};