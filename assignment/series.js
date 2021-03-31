
// 13.fibinochi serice
fibonacciGenerator(15)
function fibonacciGenerator (n) {
    var output=[];
if (n===1){
    return output=[0];
}
else if (n===2){
    return output=[0,1];
}

else{
    output=[0,1];

    for (var i=2; i<n; i++){
    output.push(output[output.length-2]+output[output.length-1]);
}
}
console.table(output);
return output;
}




// program to check arm strong number


var number = 370;

var myArray = number.toString().split('');

var newArray = myArray.map( x => Math.pow(x,3));

var sum = newArray.reduce((a,c)=> a+c );

number == sum ? console.log(number+ " is Armstrong Number") : console.log("not an Armstrong");