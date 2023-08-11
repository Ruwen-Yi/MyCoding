/* 
Source: https://www.c0d3.com/curriculum/js3?challenge=93

Function call between Objects
Given object of key-string values and an object of key - function values, call the functions in 2nd object (if possible) using the values in 1st object as function params. Return new object.

solution ({
   "name": "drake",
   "age": "33",
   "power": 'finessing',
   "color": "platinum"
}, {
   "name": (e) => { return e + "kendrick" },
   "power": (e) => { return "motivating" + e }
});

// will return : 
   {
	  "name": "drakekendrick",
	  "age": "33",
	  "power": "motivatingfinessing",
	  "color": "platinum"
   }
*/

function solution(originObj, funcObj) {
	let newObj = {};

	for (let key in funcObj) {
		if (key in originObj) newObj[key] = funcObj[key](originObj[key]);
	}

	return Object.assign({}, originObj, newObj);
}

module.exports = { solution }