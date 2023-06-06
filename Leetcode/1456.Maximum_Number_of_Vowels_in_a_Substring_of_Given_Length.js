/* 
Source: https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/

Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.


Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.

point: sliding window, find sth in certain strides
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let start = 0;  // the start of the sliding window
    let end = k-1;  // the end of the sliding window
    let maxVowels = 0;      // the maximum number of vowels in k elements
    let currentVowels = 0;  // the current number of vowels in the sliding window
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);    // use set structure to lower the runtime of searching a vowel

    // check the number of vowels of the first k elements in s
    for (let i = 0; i < k; i++) {
        vowels.has(s[i]) ? ++currentVowels : undefined;
    }

    // initialize the max number of vowels
    maxVowels = currentVowels;

    // slide the window by one element towards the tail
    while (end < s.length-1) {
        // if the discarded element is a vowel, decrease the currentVowels by one 
        vowels.has(s[start++]) ? --currentVowels : undefined;

        // if the newly added element is a vowel, increase the currentVowels by one
        vowels.has(s[++end]) ? ++currentVowels : undefined;

        // if the current number of vowels is larger than the maxVowels, update the maxVowels
        maxVowels = Math.max(maxVowels, currentVowels);
    }

    return maxVowels;
};