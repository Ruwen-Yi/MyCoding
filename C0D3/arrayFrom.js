/* 
Source of the coding challenge: https://www.c0d3.com/curriculum/js3

Title: Object - Create 2d Array of Objects

Question: Given 2 integers, create 2d arrays of objects. First integer represents the amount of nested arrays, 2nd integer represents the amount of objects within each nested array.

solution(3,2)
// will return the following:
[
    [{x: 0, y:0}, {x:1, y: 0}],
    [{x: 0, y: 1}, {x:1, y: 1}],
    [{x: 0, y: 2}, {x:1, y: 2}],
]

solution(99,2)
// will return the following:
[
    [{x: 0, y:0}, {x:1, y: 0}],
    [{x: 0, y: 1}, {x:1, y: 1}],
    [{x: 0, y: 2}, {x:1, y: 2}],
    ...
    [{x: 0, y: 98}, {x:1, y: 98}],
]

x: the number of column, y: the number of row

*/

const create2dArray = function(row, column) {
    return Array.from( {length:row}, (_, indexOuter)=>{
        return Array.from( {length:column}, (_, indexInner)=>({x:indexInner, y:indexOuter}) );
    } );
}

/* 
create2dArray(row, column) accepts two integer values.
create2dArray(row, column) uses two Array.from() to create a 2D array.
Each Array.from() is given an array-like object with only the length property; also given a mapping function.
X and Y respectively take the index value of the external and internal array as their values.
*/

module.exports = {
    create2dArray
};