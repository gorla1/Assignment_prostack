
// similar to fibnachi serires
var num = [5,8,9,7,16];
var newArray = [];
for(let i=0;i<num.length-1; i++){
    
    newArray.push(num[i]+num[i+1]);
}
newArray.push(num[num.length-1]);
console.log(num);
console.table(newArray);



// input: [5,8,9,7,16]
// output: [13,17,16,23,16]


// var s = []
// let i=0;

// while(i<num.length-1){
// s.push(num[i]+num[i+1]);
// i++;
// }
// s.push(num[num.length-1]);

// console.log(s);






