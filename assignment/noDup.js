
// using indexOf() and filter() methods to remove duplicates from Array
var num = [0,1,2,5,9,0,2];
var noDup = num.filter( (x, index) =>{
 return num.indexOf(x) === index;
});
console.table(noDup);

// using includes() method to remove duplicates from Array
var num1 = [2,5,8,2,5,8,9,6,3];
var noDup1 = [];
num1.map( x =>{
    if(!noDup1.includes(x)){
        noDup1.push(x);
    }
});
console.table(noDup1);