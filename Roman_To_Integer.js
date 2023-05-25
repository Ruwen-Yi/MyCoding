/* 
source: https://leetcode.com/problems/roman-to-integer/

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

let map = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
])

/**
 * @param {string} s
 * @return {number}
 * iterate the string input in reverse
 
 * - if current character represents a higher value than the preceding one,
 *   then minus the preceding one, and add the result to the sum;
 
 * - if current character represents a smaller value than the preceding one,
 *   then just add the current value to the sum.
 */
let romanToInt = function(s) {
    let sum = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        let preValue = map.get(s[i-1]) || 0;
        let currentValue = map.get(s[i]);

        sum += preValue >= currentValue ? (currentValue) 
                : (--i, (currentValue - preValue));
    }
    
    return sum;
};