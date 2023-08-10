const a = {
    "jayZ": (key) => console.log(key),
    "tupac": (key) => console.log(key + 2),
    "name3": (key) => console.log(key === "name3"),
    "level": (key) => console.log(key + key + key)
 }
 
 solution(a, 5000)
 
 function solution(obj, sec){
   let keys = Object.keys(obj);
   let length = keys.length;
 
   function executeNext(index){
     if (index >= length) return;
 
     obj[keys[index]](keys[index]);
     setTimeout(()=>executeNext(index+1), sec);
   }
 
   executeNext(0);
 }