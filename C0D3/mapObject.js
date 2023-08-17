/* 
Source: https://www.c0d3.com/curriculum/js3?challenge=97

Write a map function for objects

const info = {
   ironman: 'arrogant',
   spiderman: 'naive',
   hulk: 'strong',
}
const result = info.map( (key, value, i) => {
   return key + i + value
})
console.log(result)

// will print out ['ironman0arrogant', 'spiderman1naive', 'hulk2strong']

*/

Object.prototype.map = function(callback){
    let resultArr = [];
    let i = 0;

    // loop through the key-value pairs and apply the callback function on each pair
    for (let [key, value] of Object.entries(this)) {    
        resultArr.push(callback(key,value,i++))
    }

    return resultArr;

    // alternative 1:
    // return Object.entries(this).map( ([key,value], index ) => callback(key,value,index) )

    // alternative 2:
    // const keys = Object.keys(this);
    // return keys.map((key, index) => callback(key, this[key], index));
}


module.exports = {customMap: Object.prototype.map};