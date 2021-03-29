/*                        javaScript Arrays                   */ 

// complete javaScript-Arrays

/*
// 1. How to Create Array in JavaScript.

     var myArray = ["dinesh","sumanth","jayendra"];

//2. How to Access Item from Array in JavaScript.

    console.log(myArray[0]);

// 3. How to Access Last Item from Array in JavaScript.

    var newArray = myArray[myArray.length-1];

    console.log(newArray);

// 4. How to Access All Items from Array Using for Loop in JavaScript.

    for(var i=0;i<myArray.length; i++){
        console.log("my name is "+ myArray[i]);
    }
    
 */
/*                        Array of Objects                      */

// 5. How to Create Array of Objects in JavaScript
    
//     var friends = {name:"sumanth",age:23,height:" 5'7'' "}

// 6. How to Access Array of Objects Item in JavaScript
    
//     console.log(friends["name"]);
//     console.log(friends["height"]);

// 7. How to Create 2D Array in JavaScript
// array of arrays is called multi dimentional array

//  let activities = [
//     ['Work', 9],
//     ['Eat', 1],
//     ['Commute', 2],
//     ['Play Game', 1],
//     ['Sleep', 7]
//  ];

//  console.table(activities);

// 8. Simple Program to Sum of 2D Array in JavaScript


// 9. How to Access 2D Array Item in JavaScript
    
//     console.log(activities[1][0]);//Eat
//     console.log(activities[4][0],activities[4][1]); // sleep 7

// 10. JavaScript Array Push Method

//     activities.push(["bath",0.5])
//     console.table(activities);

// 11. JavaScript Array Pop Method
    
//     activities.pop();
//     console.table(activities);

//     shift and unshift are the counter parts of push and pop() method
// 12. JavaScript Array Shift Method[it removes the first element in array]

//     activities.shift();
//     console.table(activities);

//     adds the object at the starting of the array it is counter part to push() method
// 13. JavaScript Array Unshift Method
    
//     activities.unshift(["bath","15 min"]);
//     console.table(activities);


 /*                           Slicing/ Array Slicing                   */

// 14. JavaScript Array Splice Method Explanation [sloce(startcall,endcall)]
// 15. JavaScript Array Slice Method Explanation
    
//     var friends = ["dinesh","sumanth","jayendra","varaprasad","pavani"];
//     var newFriends = friends.slice(1,4);
//     console.log(newFriends);



// 16. How to Copy Data from Array in JavaScript

//     var number = [2,5,8,9];   //  copy data method

//     var newNum = number.map(x=> x);
//     console.log(newNum);

//     var number = [2,5,8,9];     // copy by reference

//     var newNum = number;

//     console.log(newNum);




// 17. JavaScript Array Copy Data vs Copy Reference
    
//     the only difference is in memory location.
//     if you use copy reference the memory will store the reference values


// 18. JavaScript Use of indexof Method [it gives the position of value at it's first apperance]
// 19. How to Find Index of Item in Array in JavaScript

//     var number = [8,2,5,8,9,8];

//     console.log(number.indexOf(8));

    

// 20. How to Find Object from Array of Object in JavaScript



// var inventory = [
//   {name: 'apples', quantity: 2},
//   {name: 'bananas', quantity: 0},
//   {name: 'cherries', quantity: 5}
// ];

// var result = inventory.find( ({ name }) => name === 'cherries' );
// console.table(result);


/*                                Find and Index                     */

// 21. JavaScript Array find Method

// var inventory = [
//   {name: 'apples', quantity: 2},
//   {name: 'bananas', quantity: 0},
//   {name: 'cherries', quantity: 5}
// ];

// var result = inventory.find( ({ name }) => name === 'cherries' );
// console.table(result);

// 22. JavaScript Array findIndex Method

//     var myArray = [2,5,8,9,6,3];
//     var num = myArray.findIndex(x => x>8);
//     console.log(num);

// 23. JavaScript Object Find Index in Array


// var inventory = [
//   {name: 'apples', quantity: 2},
//   {name: 'bananas', quantity: 0},
//   {name: 'cherries', quantity: 5}
// ];
// var result = inventory.findIndex( ({ name }) => name === 'bananas' );
// console.log(result);


// 24. JavaScript lastIndex of Method

//     var myArray = [2,5,8,9,2,6,5,4,2];
    
//     var newArray = myArray.lastIndexOf(2);

//     console.log(newArray);


/*                       Array Supporting Functions – ES6             */

// 25. JavaScript Array forEach () Method

//     var s = [2,5,8,9];
//    s.forEach( x => {
//    console.log(x*2); 
//     });
    

// 26. JavaScript Array .map() Method to Work with Each Item of Array

//     var number = [2,5,8,9];
//     var newNum = number.map(x=>x+5);
//     console.log(newNum);
    
// 27. JavaScript Array .sort() Method
//      var number = [2,5,8,7,6];
//      var newNum = number.sort((a,b)=> a-b);
//      console.log(newNum); 
    
// 28. JavaScript Array Sort Object Data using .sort() Method
// 29. JavaScript Array Custom Sort for Objects
    
//     var names = [
//     {name:"dinesh",age:24,height:5.6},
//     {name:"sumanth",age:23,height:5.7},
//     {name:"hannah",age:22,height:5.1}
//     ];
//     var friend = names.sort((a,b) => { return a.age - b.age });
//     console.table(friend);


// 30. JavaScript Array. reverse () Method

// var number = [2,5,8,9];
// var newNum = number.reverse();
// console.table(newNum);

// 31. How to Sort Item in Reverse Order of Array in JavaScript

// var number = [2,5,8,7,6];
// var newNum = number.reverse(number.sort((a,b)=> a-b));
// console.table(newNum);

// 32. Create a Simple Program for Sorting and Filter Data of Food

    // var food = [{id:4,name:"biriyani",price:270},
    //             {id:2,name:"kfc",price:570},
    //             {id:1,name:"french fries",price:70},
    //             {id:3,name:"thalli",price:300}];
    
    // var $sort = food.sort((a,b)=> {return a.id -b.id});

    // var newFood = $sort.filter(x => x.price >= 100 );

    // console.table(newFood);



// 33. Sort Table Data in HTML JavaScript Using sort () Method


// 34. JavaScript .includes() Method Example 
//it is used for duplicates deleting

//     var duplicate = [2,5,8,7,2,5,9,6,2,5];
//     var noDup = [];
//     duplicate.forEach( x => {
//         if(!noDup.includes(x)){
//             noDup.push(x);
//         }
//     });
//   console.table(noDup);  

//     duplicate.map(x=>{if(!noDup.includes(x)){noDup.push(x)}});
//     console.table(noDup);    


// 35. JavaScript Array filter () Method Example
// 36. How to Use Filter Method in JavaScript Array
    
    // var numbers = [1,2,3,4,5,6,7,8,9,10];
    // var even = numbers.filter(x=> x%2 == 0);
    // console.table(even);



  /*                  Spread Operator (…)                */

//  37. JavaScript Array Use of Spread Operator (…)  
//     it is used to invoke function with an array

//  38. Spread Operator Example in JavaScript (…)

//  40. Pass Data in Function Using Spread Operator (…)

// function dinesh(a,b,c,d,e){
//     return a+b+c+d+e;
// }
// var numbers = [2,5,8,7,6];
// dinesh(...numbers)   // output : 28


//  39. Copy Array Data Using Spread Operator (…)

// var dob = [1997,0,15];
// var d = new Date(...dob);
// console.log(d);


/*                             Destruction              */

//  41. Array Destruction in JavaScript
// [a, b, ...rest] = [10, 20, 30, 40, 50];


// let a, b, rest;

// [a, b, ...rest] = [10, 20, 30, 40, 50, 60, 70];

// console.table(rest);



//  42. What is The Advantage of Using Array Destruction in JavaScript


//  43. Access Item of Array in Variable Using Array Destruction

// var months = ["jan","feb","mar","apr"];

// var [m1,m2,m3,m4] = months;

// console.log(m1,m2,m3,m4);



/*                        Array - String               */

//  44. JavaScript Convert String to Array

// var myName = "GORLA DINESH DAGGUBATI SUMANTH";
// var myArray = myName.split(" ");
// console.table(myArray);



//  45. JavaScript Convert Array to String

    
// var num = [2,5,6];
// console.log(typeof num);

// var name = num.toString();
// console.log(typeof name);

// console.log(num,name);
    