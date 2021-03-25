/*            Assignments        */
 
//1. write a program to check a number divisible by 7 or not


 let number = 14;

 number % 7 == 0 ? console.log("Number Is Divisible By 7") : console.log("Number Is Not Divisible By 7")


// 2.write a program to check the number is multiple of 3 or not


 let number = 27;

 number % 3 == 0 ? console.log("Number Is A Multiple of 3") : console.log("Number Is Not A Multiple of 3")


// 3.write a program to check the number is positive or not

 let number =-125;
 number>=0 ? console.log("Positive Number") : console.log("Negetive Number")


// 4.write a program to check a number is having 4 in units place or not


 let number = 124;
 let newNumber = number.toString();

 newNumber.slice(newNumber.length-1)== 4 ? console.log("Units Place Is 4") : console.log("units place is not 4")


// 5.write a program to check number is 3 digit or not

 let number = 123;
 let newNumber = number.toString();
 newNumber.length == 3 ? console.log("3 digit number") : console.log("not 3 digit number")


// 6.write a program to pring even or odd for given number

 let number = 34;
 number % 2 == 0 ? console.log("even number") : console.log("odd number")


// 7.write a program to print gratest number in given two numbers

 let firstNumber = 36;
 let secondNumber =6;
 firstNumber > secondNumber ? console.log(firstNumber) : console.log(secondNumber)


// 8.write a program to print gratest number in given two numbers

 let firstNumber = 25;
 let secondNumber =66;
 firstNumber < secondNumber ? console.log(firstNumber) : console.log(secondNumber)


// 9.write a program to print the greatest number in given 3 numbers

 let firstNumber = 66;
 let secondNumber = 55;
 let thirdNumber = 22;
 if(firstNumber > secondNumber && firstNumber > thirdNumber){
     console.log(firstNumber)
     }else if(secondNumber > firstNumber && secondNumber > thirdNumber){
         console.log(secondNumber)
     }else{
         console.log(thirdNumber)
     }


// 10.write a program to print the least number in given 3 numbers

 let firstNumber = 6;
 let secondNumber = 55;
 let thirdNumber = 22;
 if(firstNumber < secondNumber && firstNumber < thirdNumber){
     console.log(firstNumber)
     }else if(secondNumber < firstNumber && secondNumber < thirdNumber){
         console.log(secondNumber)
     }else{
         console.log(thirdNumber)
     }


// 11.write a program to print 3 numbers in asending order

let numbers =[56,98,105]; 
numbers.sort((a, b) => a - b);
 console.log(numbers);


// 12.write a program to print 3 numbers in descending order

 let numbers =[56,98,105]; 
 numbers.sort((a, b) => b - a);
 console.log(numbers);

