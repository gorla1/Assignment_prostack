
/*  looping assignment   */


// 1.write a program to print 1 to 10 numbers 

for( var i=1; i<=10; i++){
    console.log(i);
}


// 2.write a program to print 10 to 1


for (var i=10; i>0; i--) {
    console.log(i);
}


// 3.write a program to print 5 to 15 numbers using for loop

for ( i=5; i<=15; i++){
    console.log(i);
}


// 4.write a program to print 15 to 10

for (i=15; i>=10; i--){
    console.log(i);
}

// 5.program to print 1 to 10 even numbers

for (var i=1; i<=10; i++){
    i%2 == 0 ? console.log(i) : null;
}

// using While Loop

var i=0;

while(i<10){
    i++;
    i%2 == 0 ? console.log(i) : null;
}

// 6.program to print 1 to 10 odd numbers

for (var i=1; i<=10; i++){
    i%2 == 0 ? null : console.log(i);
}


// 7.wrirte a program for first 10 multiples of 4

var i=0;
var x=4;
while(i<10){
    i++;
   console.log( x+ "*" +i+"="+ x*i);
}

// 8.4 multiples of 4

var i=0;
var x=4;
while(i<4){
    i++;
   console.log(x*i);
}

// 9.write a program to print the multiplication table of 6

var i=0;
var x=6;
while(i<10){
    i++;
   console.log( x+ "*" +i+"="+ x*i);
}


// 10.factors of 24  using while loop
// 1,2,3,4,6,,8,12,24

var i=0;
while(i<=24){
    i++;
    24%i == 0 ? console.log(i) : null
}

// 11.write a program to print reverse digits of numbers


var numbers =[2,5,8,9];
var newNumber=numbers.reverse();
console.log(newNumber);


// 12.write a program to read 5 number and print only even numbers

var number = [2,5,8,7,9,6,3,4];

var newNumber = number.slice(0,5);

newNumber.filter(newNumber=> (newNumber%2 == 0 ? console.log(newNumber): null))


// 13.fibinochi serice

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
    return output;
    }

    fibonacciGenerator(10)
    
// program to check arm strong number


var number = 370;

var myArray = number.toString().split('');

var newArray = myArray.map( x => Math.pow(x,3));

var sum = newArray.reduce((a,c)=> a+c );

number == sum ? console.log("Armstrong Number") : console.log("not an Armstrong");




