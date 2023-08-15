/* 
Source: https://www.c0d3.com/curriculum/js3?challenge=96

Write a function called solution that takes in an array of strings and returns a function.

returned function will return an object with only keys that exist in the input array.

const resp = solution(['apollo', 'bella', 'cinderella'])
console.log(resp({'apple': 25, 'apollo': 45, 'cindy': 84}))
// will console.log this object: {"apollo": 45}

console.log(resp({orange: 80, 'apollo': 95}))
// will console.log this object: {'apollo': 95}

console.log(resp({iron: 'man', billy: 'joel'}))
// will console.log this object: {}

*/

function solution(arr) {
    return function(obj) {
        return arr.reduce( (acc,item) => {
            obj[item] ? acc[item] = obj[item] : null;
            return acc;
        },{})
    }
}

module.exports = {solution}