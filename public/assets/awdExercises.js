//Advanced Array Methods Exercises

//forEach Exercises

function halfValues(arr) {
    let newArr = [];
    arr.forEach((val) => {
        newArr.push(val / 2);
    })
    return newArr;
}

halfValues([2, 4, 6])

function doubleValues(arr) {
    let newArr = [];
    arr.forEach((val) => {
        newArr.push(val * 2);
    })
    return newArr;
}

function onlyEvenValues(arr) {
    let newArr = [];
    arr.forEach((val) => {
        if (val % 2 === 0) {
            newArr.push(val);
        }
    });
    return newArr;
}

function showFirstAndLast(arr) {
    let newArr = [];
    arr.forEach((val) => {
        let char1 = val[0];
        let char2 = val[val.length - 1];
        let result = char1.concat(char2);
        newArr.push(result);
    });
    return newArr;
}

function addKeyAndValue(arr, key, value) {
    arr.forEach((val) => {
        val[key] = value;
    });
    return arr;
}

function vowelCount(str) {
    let strArr = [];
    let vowelCounter = {};
    for (let i = 0; i < str.length; i++) {
        strArr.push(str[i].toLowerCase());
    }
    strArr.forEach((val) => {
        if (val === 'a' || val === 'e' || val === 'i' || val === 'o' || val === 'u') {
            if (!vowelCounter[val]) vowelCounter[val] = 1;
            else vowelCounter[val] += 1;
        }
    });
    return vowelCounter;
}

//Map exercises

function myMap(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i, arr));
    }
    return newArr;
}

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*/

function doubleValues(arr) {
    const doubleArr = [];
    arr.map((val) => {
        doubleArr.push(val * 2);
    });
    return doubleArr;
}

function doubleValuesRevised(arr) {
    return arr.map((val) => {
        return val * 2;
    })
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
*/

function valTimesIndex(arr) {
    const indexMultiplier = [];
    let index = 0;
    arr.map((val) => {
        indexMultiplier.push(val * index);
        index++;
    });
    return indexMultiplier;
}

function valTimesIndexRevised(arr) {
    return arr.map((val, index) => {
        return val * index;
    });
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
*/

function extractKey(arr, key) {
    let newArr = [];
    arr.map((object) => {

        for (let objKey in object) {
            if (key === objKey) {
                newArr.push(object[objKey]);
            }
        }
    });
    return newArr;
}

function extractKeyRevised(arr, key) {
    return arr.map((object) => {
        return object[key];
    });
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
*/

function extractFullName(arr) {
    const fullNameArr = [];
    const firstArr = [];
    const lastArr = [];
    let index = 0;
    arr.map((object) => {
        for (let key in object) {
            if (key === 'first') {
                firstArr.push(object[key]);
            }
            if (key === 'last') {
                lastArr.push(object[key]);
            }
        }
        let fullName = firstArr[index] + ' ' + lastArr[index];
        fullNameArr.push(fullName);
        index++;
    })
    return fullNameArr;
}

function extractFullNameRevised(arr) {
    return arr.map(() => {
        return object.first + ' ' + object.last;
    })
}

//Filter Exercises

function filter(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

function filterOut(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.
*/

function filterByValue(arr, key) {
    return arr.filter((obj) => {
        return obj[key];
    });
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.
*/

function find(arr, searchValue) {
    return arr.filter((val) => {
        return val - searchValue === 0;
    })[0];
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.
*/

function findInObj(arr, key, searchValue) {
    return arr.filter((obj) => {
        return obj[key] === searchValue;
    })[0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
*/

function removeVowels(str) {
    const vowels = 'aeiou'
    return str.toLowerCase().split("").filter((val) => {
        return vowels.indexOf(val) === -1;
    }).join('');
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).
*/

function doubleOddNumbers(arr) {
    return arr.filter((val) => {
        return val % 2 !== 0;
    }).map((val) => {
        return val * 2;
    })
}

//Some Exercises

function mySome(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) return true;
        else return false;
    }
}

function none(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) return true;
        else return false;
    }
}

/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.
*/

function hasOddNumber(arr) {
    return arr.some((val) => {
        return val % 2 === 1;
    });
}

/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false
*/

function hasAZero(num) {
    const numArr = String(num).split('').map((num) => {
        return Number(num);
    });
    return numArr.some((val) => {
        return val === 0;
    });
}




//Every Exercises

function myEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) return false;
        else return true;
    }
}

function allLowerCase(str) {
    return str.split('').every((value) => {
        return value === value.toLowerCase();
    });
}

/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false.
*/

function hasOnlyOddNumbers(arr) {
    return arr.every((val) => {
        return val % 2 === 1;
    });
}

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.
*/

function hasNoDuplicates(arr) {
    return arr.every((val) => {
        return arr.indexOf(val) === arr.lastIndexOf(val);
    });
}

/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.
*/

function hasCertainKey(arr, key) {
    return arr.every((obj) => {
        return obj[key];
    })
}

/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.
*/

function hasCertainValue(arr, key, searchValue) {
    return arr.every((obj) => {
        return obj[key] === searchValue;
    });
}

//Reduce Exercises

/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.
*/

function extractValue(arr, key) {
    return arr.reduce((accumulator, nextValue) => {
        if (nextValue[key]) {
            accumulator.push(nextValue[key]);
            return accumulator;
        }
    }, []);
}


/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
*/

function reduceVowelCount(str) {
    const arr = [];
    const vowels = 'aeiou';
    const lowerCasedStr = str.toLowerCase();
    const lowerCasedVowels = lowerCasedStr.split("").filter((val) => {
        return vowels.indexOf(val) !== -1;
    })
    for (let i = 0; i < lowerCasedVowels.length; i++) {
        arr.push(lowerCasedVowels[i]);
    }
    return arr.reduce((accumulator, nextValue) => {
        if (nextValue in accumulator) {
            accumulator[nextValue] += 1;
        } else {
            accumulator[nextValue] = 1;
        }
        return accumulator;
    }, {});
}

function refactoredRedVowelCount(str) {
    const vowels = 'aeiou';
    return str.split("").reduce((accumulator, nextValue) => {
        if (vowels.indexOf(nextValue.toLowerCase()) !== -1) {
            if (nextValue in accumulator) {
                accumulator[nextValue] += 1;
            } else {
                accumulator = 1;
            }
        }
        return accumulator;
    }, {})
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.
*/

function addKeyAndValue(arr, key, value) {
    return arr.reduce((accumulator, nextValue) => {
        if (!nextValue[key]) {
            nextValue[key] = value;
            accumulator.push(nextValue);
        }
        return accumulator;
    }, []);
}


/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 
*/

function partition(arr, callback) {
    const truthyArr = [];
    const falseyArr = [];
    return arr.reduce((accumulator, nextValue) => {
        if (callback(nextValue) === true) {
            truthyArr.push(nextValue);
        } else {
            falseyArr.push(nextValue);
        }
        return accumulator;
    }, [truthyArr, falseyArr]);
}

//Closures

// function outer(a) {
//     return function inner(b) {
//         // The inner function is making use of the variable "a"
//         // Which was defined in an outer function caller "outer"
//         // And by the tie inner is called, that outer function has returned
//         // This function called "inner" is a closure!
//         return a + b;
//     }
// }

// //To execute the inner() function, we run 
// outer(5)(5); // 10
// const storeOuter = outer(5);
// storeOuter(10); // 15


// function counter() {
//     let count = 0;
//     return function inner() {
//         count++;
//         return count;
//     }
// }

// const counter1 = counter();
// const counter2 = counter();
// // There two variables run the sme function, but affect the count variable within the counter function separately since the variable is unique for each variable that is running the counter function

// function classRoom() {
//     const instructors = ["Brandon", "Colt"];
//     return {
//         getInstructors: function () {
//             return instructors.slice();
//         },
//         addInstructor: function (instructor) {
//             instructors.push(instructor);
//             return instructors.slice();
//         }
//     }
// }

// const course1 = classRoom();

// course1.getInstructors();
// //Returns ["Brandon", "Colt"]
// course1.addInstructor("Severus");
// //Returns ["Brandon", "Colt", "Severus"]

// const course2 = classRoom();

// course2.addInstructor("Dumbledore");
// //Returns ["Brandon", "Colt", "Dumbledore"]
// //The variable from course1 is separate from course2

// course1.getInstructors().pop();
// //This will return "Severus"
// //This will directly modify the instructors variable within course1

/* 
Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.
*/

function specialMultiply(a, b) {
    if (a && b) return a * b;
    else if (a && !b) {
        return function (num) {
            return a * num;
        };
    }
}

/* 
Write a function called guessingGame which takes in one parameter amount. The function should return another function that takes in a parameter called guess. In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.

In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - you should return the string "You got it!". If the guess is too high return "Your guess is too high!" and if it is too low, return "Your guess is too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.

You will have to make use of closure to solve this problem.
*/

function guessingGame(amount) {
    const answer = Math.floor(Math.random() * 10) + 1;
    let guesses = 0;
    let completed = false;
    return function (guess) {
        if (guesses < amount && completed === false) {
            guesses++;
            if (guess === answer) {
                completed = true;
                if (guesses === 1) return `You got it in ${guesses} try!`;
                else return `You got it in ${guesses} tries!`;
            }
            else if (guess > answer) return `Your guess is too high! You have ${amount - guesses} guesses remaining`;
            else return `Your guess is too low! You have ${amount - guesses} guesses remaining`;
        } else {
            completed = true;
            return `Game Over. The answer was ${answer}`;
        }
    };
}

const easyGame = guessingGame(5);
const mediumGame = guessingGame(3);
const hardGame = guessingGame(2);
const oneShotGame = guessingGame(1);


// Call, Apply, and Bind Exercises

/*
Write a function called arrayFrom which converts an array-like-object into an array.

Examples:
    var divs = document.getElementsByTagName('divs');
    divs.reduce // undefined
    var converted = arrayFrom(divs);
    converted.reduce // function(){}....
*/

function arrayFrom(arrayLikeObject) {
    return [].slice.call(arrayLikeObject)
}

/* 
// Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.

Examples:
    sumEvenArguments(1,2,3,4) // 6
    sumEvenArguments(1,2,6) // 8
    sumEvenArguments(1,2) // 2
*/

function sumEvenArguments() {
    const args = [].slice.call(arguments);
    return args.reduce((accumulator, next) => {
        if (next % 2 === 0) {
            return accumulator + next;
        } else return accumulator
    }, 0);
}

function sumDoubleOddArguments() {
    const args = [].slice.call(arguments);
    return args.reduce((accumulator, next) => {
        if (next % 2 !== 0)  return accumulator + next * 2;
        else return accumulator;
    }, 0)
}

/* 
Write a function called invokeMax which accepts a function and a maximum amount. invokeMax should return a function that when called increments a counter. If the counter is greater than the maximum amount, the inner function should return "Maxed Out"

Examples:

    function add(a,b){
        return a+b
    }

    var addOnlyThreeTimes = invokeMax(add,3);
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(2,2) // 4
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(1,2) // "Maxed Out!"

*/

function invokeMax(fn, num) {
    let counter = 0;
    return function () {
        if (counter >= num) return 'Maxed Out!'
        counter++;
        return fn.apply(this, arguments);
    }
}

/* 
Write a function called once which accepts two parameters, a function and a value for the keyword 'this'. Once should return a new function that can only be invoked once, with the value of the keyword this in the function set to be the second parameter.
Examples:
    function add(a,b){
        return a+b
    }
    var addOnce = once(add, this);\
    addOnce(2,2) // 4
    addOnce(2,2) // undefined
    addOnce(2,2) // undefined
    function doMath(a,b,c){
        return this.firstName + " adds " + (a+b+c)
    }
    var instructor = {firstName: "Elie"}
    var doMathOnce = once(doMath, instructor);
    doMathOnce(1,2,3) // "Elie adds 6"
    doMathOnce(1,2,3) // undefined
*/

function once(fn, thisArg) {
    let toggle = false;
    return function () {
        if (!toggle) {
            toggle = true;
            return fn.apply(thisArg, arguments);
        }
    }
}

// BONUSES! 

/* 
Write a function called bind which accepts a function and a value for the keyword this. Bind should return a new function that when invoked, will invoke the function passed to bind with the correct value of the keyword this. HINT - if you pass more than two parameters to bind, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

Examples:

    function firstNameFavoriteColor(favoriteColor){
        return this.firstName + "'s favorite color is " + favoriteColor
    }
    
    var person = {
        firstName: 'Brandon'
    }
    
    var bindFn = bind(firstNameFavoriteColor, person);
    bindFn('green') // "Brandon's favorite color is green"
    
    var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
    bindFn2('green') // "Brandon's favorite color is blue" 
    
    function addFourNumbers(a,b,c,d){
        return a+b+c+d;
    }

    bind(addFourNumbers,this,1)(2,3,4) // 10
    bind(addFourNumbers,this,1,2)(3,4) // 10
    bind(addFourNumbers,this,1,2,3)(4) // 10
    bind(addFourNumbers,this,1,2,3,4)() // 10
    bind(addFourNumbers,this)(1,2,3,4) // 10
    bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10

*/
function firstNameFavoriteColor(favoriteColor) {
    return this.firstName + "'s favorite color is " + favoriteColor
}

var person = {
    firstName: 'Brandon'
}

function addFourNumbers(a, b, c, d) {
    return a + b + c + d;
}

function bind(fn, thisArg) {
    const outerArgs = [].slice.call(arguments, 2);
    return function () {
        const innerArgs = [].slice.call(arguments);
        const allArgs = outerArgs.concat(innerArgs);
        return fn.apply(thisArg, allArgs);
    }
}

/* 
Write a function called flip which accepts a function and a value for the keyword this. Flip should return a new function that when invoked, will invoke the function passed to flip with the correct value of the keyword this and all of the arguments passed to the function REVERSED. HINT - if you pass more than two parameters to flip, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure! 

Flip should return a new function that when invoked takes the correct number of required arguments to that function which are then reversed. HINT - you will need to use the .length property on functions to figure out the correct amount of arguments. For example:

flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) 

Examples:

    function personSubtract(a,b,c){
        return this.firstName + " subtracts " + (a-b-c);
    }
    
    var person = {
        firstName: 'Elie'
    }
    
    var flipFn = flip(personSubtract, person);
    flipFn(3,2,1) // "Elie subtracts -4"
    
    var flipFn2 = flip(personSubtract, person, 5,6);
    flipFn2(7,8). // "Elie subtracts -4"
    
    function subtractFourNumbers(a,b,c,d){
        return a-b-c-d;
    }

    flip(subtractFourNumbers,this,1)(2,3,4) // -2
    flip(subtractFourNumbers,this,1,2)(3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4) // -2
    flip(subtractFourNumbers,this,1,2,3,4)() // -2
    flip(subtractFourNumbers,this)(1,2,3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4,5,6,7) // -2
    flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // -2
    flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) // -22

*/

function flip(fn, thisArg) {
    const arr = [];
    const outerArgs = [].slice.call(arguments, 2)
    return function () {
        const innerArgs = [].slice.call(arguments);
        const allArgs = outerArgs.concat(innerArgs).slice(0, fn.length);
        for (let arg of allArgs) {
            arr.unshift(arg);
        }
        return fn.apply(thisArg, arr);
    }
}

function multipleThreeNums(x, y) {
    return function (z) {
        return x * y * z;
    }
}

//OOP Exercises

// PART 1

// Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber. Your function MUST be named Person. 

// Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the object created from the Person functions' favorite number.

// PART 2

// Given the following code - refactor the Child function to remove all the duplication from the Parent function. You should be able to remove 4 lines of code in the Child function and replace it with 1 single line.

class Person {
    constructor(firstName, lastName, favoriteColor, favoriteNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColor = favoriteColor;
        this.favoriteNumber = favoriteNumber;
    }
    multiplyFavoriteNumber(num) {
        return num * this.favoriteNumber;
    }
}

class Parent {
    constructor(firstName, lastName, favoriteColor, favoriteFood) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColor = favoriteColor;
        this.favoriteFood = favoriteFood;
    }
}

class Child {
    constructor() {
        Parent.apply(this, arguments);
    }
}

//Prototype

// 1 - Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber)

class protoPerson {
    constructor(firstName, lastName, favoriteColor, favoriteNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColor = favoriteColor;
        this.favoriteNumber = favoriteNumber;
        this.family = [];
    }
}


/* 2 - Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.
*/

protoPerson.prototype.fullName = function () {
    return this.firstName + ' ' + this.lastName;
}

// 3 -  Add a property on the object created from the Person function called family which is an empty array. This will involve you going back and adding an additional line of code to your Person constructor you previously created in exercise 1.

/* 4 - Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object construced from the Person constructor (HINT - take a look at the instanceof keyword). Make sure that your family array does not include duplicates! This method should return the length of the family array.
*/

protoPerson.prototype.addToFamily = function (name) {
    if (name instanceof Person !== false) {
        for (let member of this.family) {
            if (member === name) {
                return this.family.length;
            }
        }
        this.family.push(name);
    }
    return this.family.length;
}

// PART II

// 1 - Implement your own version of Array.prototype.map. The function should accept a callback and return a new array with the result of the callback for each value in the array. 

// Array.prototype.map = function (callback) {
//     let newArr = [];
//     for (let val of this) {
//         newArr.push(callback(val));
//     }
//     return newArr;
// }

/* 2 - Implement a function called reverse that reverses a string and place it on the String.prototype
*/

String.prototype.reverse = function () {
    let reversed = [];
    for (let char of this) {
        reversed.unshift(char);
    }
    const revStr = reversed.join('');
    return revStr;
}

//Arrow Function Exercises

/* 1 - Refactor the following code to use ES2015 arrow functions - make sure your function is also called tripleAndFilter

    function tripleAndFilter(arr){
      return arr.map(function(value){
        return value * 3;
      }).filter(function(value){
        return value % 5 === 0;
      })
    }

*/

const tripleAndFilter = (arr) => arr.map((value) => value * 3).filter((value) => value % 5 === 0);

/* 2 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called doubleOddNumbers

    function doubleOddNumbers(arr){
        return arr.filter(function(val){
            return val % 2 !== 0;
        }).map(function(val){
            return val *2;
        })
    }

*/

const doubleOddNums = (arr) => arr.filter((val) => val % 2 !== 0).map((val) => val * 2);


/* 3 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called mapFilterAndReduce.

    function mapFilterAndReduce(arr){
      return arr.map(function(val){
        return val.firstName
      }).filter(function(val){
        return val.length < 5;
      }).reduce(function(acc,next){
        acc[next] = next.length
        return acc;
      }, {})
    }
*/

let mapFilterAndReduce = (arr) => arr.map(val => val.firstName).filter(val => val.length < 5)
    .reduce((acc, next) => {
        acc[next] = next.length
        return acc;
    }, {})


/* 4 - Write a function called createStudentObj which accepts two parameters, firstName and lastName and returns an object with the keys of firstName and lastName with the values as the parameters passed to the function.
*/

let createStudentObj = (firstName, lastName) => ({ firstName: firstName, lastName: lastName });

/* 5 - Given the following code: 


Refactor this code to use arrow functions to make sure that in 1000 milliseconds you console.log 'Hello Colt'
*/

const instructor = {
    firstName: 'Colt',
    sayHi: function () {
        setTimeout(() => {
            console.log(`Hello ${this.firstName}`);
        }, 1000)
    }
}

//Rest and Spread Exercises

/* 
Write a function called smallestValue which accepts a variable number of parameters and returns the smallest parameters passed to the function.
*/

function smallestValue(...args) {
    let valCheck = Infinity;
    for (let i = 0; i < args.length; i++) {
        if (args[i] < valCheck) valCheck = args[i];
    }
    return valCheck;
}

/* 
Write a function called placeInMiddle which accepts two parameters, an array and another array. This function should return the first array with all of the values in the second array placed in the middle of the first array.
*/

function placeInMiddle(arr, vals) {
    const arr1 = [];
    const arr2 = [];
    const half = Math.floor(arr.length / 2);
    for (let i = 0; i < half; i++) {
        arr1.push(arr[i]);
    }
    for (let i = half; i < arr.length; i++) {
        arr2.push(arr[i]);
    }
    const fullArr = [...arr1, ...vals, ...arr2];
    return fullArr;
}

/* 
Write a function called joinArrays which accepts a variable number of parameters (you can assume that each argument to this function will be an array) and returns an array of all of the parameters concatenated together

*/

function joinArrays(...args) {
    const arr = [];
    for (let i = 0; i < args.length; i++) {
        arr.push(...args[i]);
    }
    return arr;
}

/* 
// Write a function called sumEvenArgs which takes all of the parameters passed to a function and returns the sum of the even ones.
*/

function sumEvenArgs(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        if (args[i] % 2 === 0) {
            total += args[i];
        }
    }
    return total;
}

/* 
Write a function called flip which accepts a function and a value for the keyword this. Flip should return a new function that when invoked, will invoke the function passed to flip with the correct value of the keyword this and all of the parameters passed to the function REVERSED. HINT - if you pass more than two parameters to flip, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

*/

function flip(fn, thisArg, ...outerArgs) {
    return function (...innerArgs) {
        const args = outerArgs.concat(innerArgs).slice(0, fn.length).reverse();
        return fn.apply(thisArg, args);
    };
}

/* 
Write a function called bind which accepts a function and a value for the keyword this. Bind should return a new function that when invoked, will invoke the function passed to bind with the correct value of the keyword this. HINT - if you pass more than two parameters to bind, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

*/

function bind(fn, thisArg, ...outerArgs) {
    return function (...innerArgs) {
        const args = [...outerArgs, ...innerArgs].slice(0, fn.length);
        console.log(args);
        return fn.apply(thisArg, args);
    }
}

//Destructuring Exercises

/* 
Write a function called displayStudentInfo which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object inside of the function.
*/

function displayStudentInfo(obj) {
    const { first, last } = obj;
    return `Your full name is ${first} ${last}`
}

/* 
Write a function called printFullName which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object DIRECTLY from the parameters. The output of the printFullName function should be the exact same as the displayStudentInfo function. 
*/

// you will have to pass in the correct parameters for this function!
function printFullName({ name = { first: "Elie", last: "Schoppik" } } = {}) {
    return `Your full name is ${name.first} ${name.last}`;
}

/* 
Write a function called createStudent which accepts as a parameter, a default parameter which is a destructured object with the key of likesES2015 and value of true, and key of likesJavaScript and value of true. 

    If both the values of likesJavaScript and likesES2015 are true, the function should return the string 'The student likes JavaScript and ES2015'. 
    If the value of likesES2015 is false the function should return the string 'The student likes JavaScript!'
    If the value of likesJavaScript is false the function should return the string 'The student likesES2015!'
    If both the value of likesJavaScript and likesES2015 are false, the function should return the string 'The student does not like much...'
*/

// you will have to pass in the correct parameters for this function!
function createStudent({ likesES2015 = true, likesJavaScript = true } = {}) {
    if (likesES2015 === true && likesJavaScript === true) {
        return 'The student likes JavaScript and ES2015!'
    }
    if (likesES2015 === false && likesJavaScript === true) {
        return 'The student likes JavaScript!'
    }
    if (likesES2015 === true && likesJavaScript === false) {
        return 'The student likesES2015!'
    }
    if (likesES2015 === false && likesJavaScript === false) {
        return 'The student does not like much...'
    }
}

/* 
Write a function called reverseArray which accepts an array and returns the array with all values reversed. See if you can do this without creating a new array!
*/

function reverseArray(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
    }
    return arr;
}


//Class Exercises

// 1 - Create a class for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber.

class Personn {
    constructor(firstName, lastName, favoriteColor, favoriteNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColor = favoriteColor;
        this.favoriteNumber = favoriteNumber;
    }
    multiplyFavoriteNumber(num) {
        return this.favoriteNumber * num;
    }
}

/* 2 - Add an instance method called multiplyFavoriteNumber that accepts one parameter and returns the product of the parameter multiplied with the favoriteNumber property on a person object.
*/

//Inheritance and Super Exercises

// 1 - Create a class for for a Vehicle. Each vehicle should have a make, model and year property.

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        return 'VROOM!';
    }
    toString() {
        return `The make, model, and year are ${this.make} ${this.model} ${this.year}`;
    }
}

// 2 - Add an instance method called start which returns the string "VROOM!"

// 3 - Add an instance method called toString which returns the string "The make, model, and year are" concatenated with the make, model and year property

/* Examples 
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/

// 4 - Create a class for a Car. Each object created from the Car function should also have a make, model, and year and a property called numWheels which should be 4. The Car prototype should inherit all of the methods from the Vehicle prototype

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor() {
        super(make, model, year);
        this.numWheels = 2;
    }
}

// 5 - Create a class for a Motorcycle. Each object created from the Motorcycle function should also have a make, model, and year and a property called numWheels which should be 2. The Motorcycle prototype should inherit all of the methods from the Vehicle prototype

// Maps and Sets Exercises

class MessageBoard {

    /*
    In your constructor method, you should assign two properties for each object created from the MessageBoard class. The first should be a property called messages which is an empty Map, and the second is a property called id which has a value of 1. 
    
    var m = new MessageBoard
    
    m.hasOwnProperty('messages') // true
    m.messages.constructor // function Map() { [native code] }
    m.hasOwnProperty('id') // true
    m.id // 1
    */

    constructor() {
        this.messages = new Map;
        this.id = 1;
    }

    /*
     
    Add a method called addMessage which accepts a string. The function should add a key and value to the messages map with a key of whatever the value of this.id is and a value of whatever the string is that is passed to the function. The function should return the object created from the class so that the method can be chained. (HINT - to implement the last part, make sure to return this).
     
    var m = new MessageBoard
    m.addMessage('hello');
    m.messages.size // 1
    m.addMessage('awesome!') // m
    m.addMessage('awesome!').addMessage('nice!').addMessage('cool!') 
    */

    addMessage(str) {
        this.messages.set(this.id, str);
        this.id += 1;
        return this;
    }

    /*
    Add a method called findMessageById which accepts a number and returns the message in the messages map with the same key as the number passed to the function. If the key is not found in the messages map, the function should return undefined.
     
     
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.findMessageById(1) // 'hello!'
    m.findMessageById(2) // 'hi!'
    m.findMessageById(3) // 'whats up?'
    m.findMessageById(4) // undefined
    m.findMessageById() // undefined
    */

    findMessageById(num) {
        for (let key of this.messages) {
            if (key[0] === num) return key[1];
        }
        return undefined;
    }

    /*
    Add a method called findMessageByValue which accepts a string and returns the message in the messages map with the same value as the string passed to the function. If the value is not found in the messages map, the function should return undefined.
     
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.findMessageByValue('hello!') // 'hello!'
    m.findMessageByValue('hi!') // 'hi!'
    m.findMessageByValue('whats up?') // 'whats up?'
    m.findMessageByValue('nothing here') // undefined
    m.findMessageByValue() // undefined
    */


    findMessageByValue(str) {
        for (let message of this.messages.values()) {
            if (str === message) return message;
        }
        return undefined;
    }

    /*
    Add a method called removeMessage which accepts a number and removes a message in the messages map with a key of the number passed to the function.
     
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.removeMessage(1)
    m.removeMessage(2)
    m.messages.size // 1
    m.removeMessage() // m
    */

    removeMessage(num) {
        this.messages.delete(num);
        return this;
    }

    /*
    Add a method called numberOfMessages which returns the number of keys in the messages map
     
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.numberOfMessages() // 3
    */

    numberOfMessages() {
        return this.messages.size;
    }

    /*
    Add a method called messagesToArray which returns an array of all of the values in the messages map
     
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.messagesToArray() // ['hello!', 'hi!', 'whats up?'])
    */

    messagesToArray() {
        const arr = []
        for (let message of this.messages) {
            arr.push(message[1]);
        }
        return arr;
    }
}

/*
Write a function called uniqueValues which accepts an array and returns the number of unique values in the array

uniqueValues([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6]) // 6
*/

function uniqueValues(arr) {
    const s = new Set(arr);
    return s.size;
}

/*

Write a function called hasDuplicates which accepts an array and returns true if there are duplicate values in the array, otherwise it should return false.

hasDuplicates([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6]) // true
hasDuplicates([1,2,3,4,5,6]) // false
hasDuplicates([]) // false
*/

function hasDuplicates(arr) {
    return new Set(arr).size !== arr.length;
}

/*

Write a function called countPairs which accepts an array of numbers and a number. The function should return the number of unique pairs (two numbers) that sum up to the number passed to the function.

countPairs([8,2,6,4,10,0],10) // 3
countPairs([8,2],10) // 1
countPairs([1,2],10) // 0
countPairs([1,2,3,4,5],10) // 0
countPairs([],10) // 0
countPairs([5,4,-10,6,-20,16],-4) // 2
countPairs([0,-4],-4) // 1
*/

function countPairs(arr, num) {
    const uniqueArr = new Set(arr);
    let count = 0;
    for (let val of arr) {
        uniqueArr.delete(val)
        if (uniqueArr.has(num - val)) {
            count++;
        }
    }
    return count;
}


/* 
Write a function called copyObject, which accepts one parameter, an object. The function should return a shallow copy of the object.

var o = {name: 'Elie'}
var o2 = copyObject({}, o)
o2.name = "Tim"
o2.name // 'Tim'
o.name // 'Elie'
*/

//ES2015 Methods Exercises

function copyObject(obj) {
    return Object.assign({}, obj);
}

/* 

Write a function called checkIfFinite which accepts one parameter and returns true if that parameter is a finite number.

checkIfFinite(4) // true
checkIfFinite(-3) // true
checkIfFinite(4. // .toEqual(true
checkIfFinite(NaN) // false
checkIfFinite(Infinity) // false
*/

function checkIfFinite(num) {
    if (Number.isFinite(num)) return true;
    else return false;
}

/*

Write a function called areAllNumbersFinite which accepts an array and returns true if every single value in the array is a finite number, otherwise return false.

var finiteNums = [4,-3,2.2]
var finiteNumsExceptOne = [4,-3,2.2,NaN]
areAllNumbersFinite(finiteNums) // true
areAllNumbersFinite(finiteNumsExceptOne) // false
*/

function areAllNumbersFinite(arr) {
    for (let num of arr) {
        if (!Number.isFinite(num)) return false;
    }
    return true;
}

/* 

Write a function called convertArrayLikeObject which accepts a single parameter, an array like object. The function should return the array like object converted to an array.

var divs = document.getElementsByTagName('div')
divs.reduce // undefined

var converted = convertArrayLikeObject(divs)
converted.reduce // funciton(){}...
*/

function convertArrayLikeObject(obj) {
    return Array.from(obj);
}

/*

Write a function called displayEvenArguments which accepts a variable number of arguments and returns a new array with all of the arguments that are even numbers.

displayEvenArguments(1,2,3,4,5,6) // [2,4,6]
displayEvenArguments(7,8,9) // [8]
displayEvenArguments(1,3,7) // []
*/

function displayEvenArguments(...args) {
    const newArr = []
    for (let arg of args) {
        if (arg % 2 === 0) newArr.push(arg);
    }
    return newArr;
}




