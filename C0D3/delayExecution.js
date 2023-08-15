/* 
Source: https://www.c0d3.com/curriculum/js3?challenge=98

should print out: 
"jayZ"
... 500 millieseconds later...
"tupac2"
...500 millieseconds later...
"true"
...500 millieseconds later...
levellevellevel
*/

/* 
const a = {
    "jayZ": (key) => console.log(key),
    "tupac": (key) => console.log(key + 2),
    "name3": (key) => console.log(key === "name3"),
    "level": (key) => console.log(key + key + key)
}

solution(a, 5000) 
*/

function solution(obj, sec) {
    let keys = Object.keys(obj);
    let length = keys.length;

    if (!length) return;

    function executeNext(index) {
        if (index >= length) return;

        obj[keys[index]](keys[index]);
        setTimeout(() => executeNext(index + 1), sec);      // in current func, schedule the the next call
    }

    executeNext(0);
}