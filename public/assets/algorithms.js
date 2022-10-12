const form = document.querySelector('#form');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const submit = document.querySelector('#submit');
const question = document.querySelector('.card-title');
const answer = document.querySelector('.card-text');

question.innerText = `Exercise: Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.`;

//Input: an array of strings
//Output: an array of strings

function exercise(obj, num = 0) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') num += exercise(obj[key]);
        else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) num += obj[key];
    }
    return num;
}



submit.addEventListener('click', (e) => {
    e.preventDefault();
    answer.innerText = `Output: ${exercise(input1.value, input2.value)}`
})







//Exercise 1
//Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.


function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let frequency = {};

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        frequency[letter] ? frequency[letter] += 1 : frequency[letter] = 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        if (!frequency[letter]) {
            return false;
        } else {
            frequency[letter] -= 1;
        }
    }
    return true;
}

function altIsAnagram(str1, str2) { //Slightly slower and more complex but still works
    if (str1.length !== str2.length) {
        return false;
    }

    string1 = str1.value;
    string2 = str2.value;
    let str1Letter;
    let str2Letter;
    let arr = [];
    let freqCounter = {};

    for (let i = 0; i < str1.length; i++) {
        str1Letter = str1[i];
        str2Letter = str2[i]
        arr.push(str2Letter);
        if (freqCounter[str1Letter] === undefined) {
            freqCounter[str1Letter] = 1;
        } else {
            freqCounter[str1Letter] += 1;
        }
    }
    for (let letter in freqCounter) {
        for (let i = 0; i < arr.length; i++) {

            if (arr[i] === letter) {
                freqCounter[letter] -= 1;
                arr.splice(i, 1);
                if (arr[i] === letter) {
                    i--;
                }
            }
        }
        if (freqCounter[letter] < 0) {
            return false;
        }
    }
    for (let key in freqCounter) {
        if (freqCounter[key] !== 0) {
            return false;
        }
    }
    return true;
}

//Exercise 2
//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniqueProperties(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

//An alternative that uses a frequencyCounter so the array doesn't need to be sorted
function unsortedUniqueCounter(arr) {
    let counter = {};
    for (let i = 0; i < arr.length; i++) {
        if (counter[arr[i]] === undefined) {
            counter[arr[i]] = 1;
        } else {
            counter[arr[i]] += 1;
        }
    }
    return Object.keys(counter).length;
}

//Exercise 3
//Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. Must have Time Complexity O(N)

function sameFrequency(x, y) {
    let strX = x.toString();
    let strY = y.toString();

    if (strX <= 0 && strY <= 0 || strX.length !== strY.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of strX) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of strY) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;;
    }
    for (let key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }
    return true;
}

function altSameFrequency(number1, number2) {
    let num1 = number1.toString()
    let num2 = number2.toString()
    let frequency1 = {}
    let frequency2 = {}
    if (number1 <= 0 && number2 <= 0 || num1.length !== num2.length) {
        return false;
    }
    for (let i = 0; i < num1.length; i++) {
        if (frequency1[num1[i]] === undefined) {
            frequency1[num1[i]] = 1;
        } else {
            frequency1[num1[i]] += 1;
        }
        if (frequency2[num2[i]] === undefined) {
            frequency2[num2[i]] = 1;
        } else {
            frequency2[num2[i]] += 1;
        }
    }
    for (let key in frequency1) {
        if (frequency1[key] !== frequency2[key]) {
            return false;
        }
    }
    return true
}

//Coding Exercise 4
//Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Restrictions: Time - O(n) Space - O(n)
// Bonus: Time - O(n log n) Space - O(1)

function areThereDuplicates() {
    let arr = []
    let left = 0;
    let right = arguments.length - 1;
    for (let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i])
    }
    while (left < right) {
        while (left < right) {
            if (arr[left] === arr[right]) {
                return true;
            }
            left++
        }
        if (arr.length > 1) {
            arr.pop();
            right--;
            left = 0;
        }
    }
    return false;
}

//Frequency Counter Are There Duplicates Function
function areThereDuplicates() {
    const frequency = {};
    for (let i = 0; i < arguments.length; i++) {
        if (frequency[arguments[i]] === undefined) {
            frequency[arguments[i]] = 1
        }
        else {
            return true;
        }
    }
    return false;
}

//Coding Exercise 5
//Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints: Time - O(N) Space - O(1)

function averagePair(arr, targAvg) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        while (left < right) {
            if ((arr[left] + arr[right]) / 2 === targAvg) {
                return true;
            }
            left++;
        }
        if (arr.length > 1) {
            arr.pop();
            right--;
            left = 0;
        }
    }
    return false;
}

//Worse O Notation, but is not limited to sorted arrays
function unsortedAveragePair(arrOfNums, targetAvg) {
    let pointer = 0;
    for (let i = pointer; i < arrOfNums.length; i++) {
        for (let j = pointer + 1; j < arrOfNums.length; j++) {
            if ((arrOfNums[i] + arrOfNums[j]) / 2 === targetAvg) {
                return true;
            }
        }
        pointer++;
    }
    return false;
}

//Coding Exercise 6
//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Required Constraints: Time - O(N + M) Space - O(1)

// sjlk
// sfsjdjsdhcajkhlkashvlkjashklhalrknvkjsfhkvjafngjbahbvliakjafhgkjafhvkjafv

function isSubsequence(str1, str2) {
    let left = 0;
    let right = str2.length;
    while (left < right) {
        if (str1[0] === str2[left]) {
            let newstr1 = str1.substring(1);
            let newstr2 = str2.substring(left + 1);
            str1 = newstr1;
            str2 = newstr2;
            if (newstr1.length === 0) {
                return true;
            }
            left = -1;
        }
        left++;
    }
    return false;
}

function altIsSubsequent(str1, str2) {
    if (str2.length < str1.length) {
        return false;
    }
    let counter = 0;
    let indexAt = 0;
    for (let i = 0; i < str2.length; i++) {
        if (str1[counter] === str2[i + indexAt + counter]) {
            counter++;
            indexAt = i;
            i = -1;
        }
        if (counter === str1.length) {
            return true;
        }
    }
    return false;
}

//Coding Exercise 7
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
//maxSubarraySum([100,200,300,400], 2) // 700

// Required Constraints: Time - O(N) Space - O(1)

function maxSumSubarray(arr, num) {
    if (num > arr.length) {
        return null;
    }
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

function altMaxSumSubArray(arrOfInt, num) {
    if (num > arrOfInt.length) {
        return null;
    }
    let maxVal = 0;
    let calcVal = 0;
    let counter = 0;
    while (counter < arrOfInt.length + 1) {
        for (let i = counter; i < counter + num; i++) {
            calcVal += arrOfInt[i];
            if (calcVal > maxVal) {
                maxVal = calcVal;
            }
        }
        counter++;
        calcVal = 0;
    }
    return maxVal;
}

//Coding Exercise 8
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
//maxSubarraySum([100,200,300,400], 2) // 700

// Required Constraints: Time - O(N) Space - O(1)

function minSubArrayLen(arr, num) {

    let counter = 1;

    while (counter <= arr.length) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= num) {
                return 1;
            }
        }

        counter++

        for (let i = 0; i < arr.length; i++) {
            let sum = 0;
            let tempSumArr = arr.slice(i, counter + i)
            for (let value of tempSumArr) {
                sum += value;
            }
            if (sum >= num) {
                return tempSumArr.length;
            }
        }
    }
    return 0;
}

function altMinSubArrayLen(arr, num) {
    let minLen = Infinity;
    let counter = 0;
    let tempSum = 0;
    let count = 0;
    while (counter < arr.length) {
        for (let i = counter; i < arr.length; i++) {
            tempSum += arr[i];
            count++;
            if (tempSum >= num) {
                if (count < minLen) {
                    minLen = count;
                }
                counter++;
                i = counter;
                count = 0;
                tempSum = 0;
            }
            if (count === arr.length) {
                return 0;
            }
        }
    }
    return minLen;
}

//Coding Exercise 9
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.


// Required Constraints: Time - O(N)

function findLongestSubstring(str) {
    let subStr = [];
    let maxSubStr = 0;
    let count = 0;
    let check = 1;

    for (let i = 0; i < str.length; i++) {
        subStr.push(str[i]);
        if (subStr.length > maxSubStr) {
            maxSubStr = subStr.length;
        }
        // console.log(i, count, maxSubStr, subStr, str[check]);
        if (subStr.includes(str[check]) === false) {
            check++;
        }
        else {
            subStr.splice(0, i + 1);
            count++;
            check = count + 1;
            i = count - 1;
        }
    }
    return maxSubStr;
}

function altLongestSubstring(str) {
    let subStr = {}
    let counter = 0;
    let tempCount = 0;
    let maxCount = 0;
    for (let i = counter; i < str.length; i++) {
        console.log(i, subStr);
        if (!subStr[str[i]]) {
            subStr[str[i]] = 1;
            tempCount++;
        } else {
            counter++;
            i = counter - 1;
            tempCount = 0;
            for (let key in subStr) {
                delete subStr[key];
            }
        }
        if (tempCount > maxCount) {
            maxCount = tempCount;
        }
    }
    return maxCount;
}

//Coding Exercise 10
// Write a function called power, which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(base, expo) {
    if (expo === 0) {
        return 1;
    }
    return base * power(base, expo - 1);
}

//Coding Exercise 11
// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

function factorial(num) {
    if (num < 0) {
        return 0;
    }
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
}

//Included Negative Numbers
function fullFactorial(num) {
    if (num < 0) return num * fullFactorial(num + 1)
    if (num === 0) return 1;
    return num * fullFactorial(num - 1);
}

//Coding Exercise 12
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr) {
    let resultArr = [];
    let value = 1;
    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }
        resultArr.push(helperInput[0])
        helper(helperInput.slice(1))
    }
    helper(arr)
    for (let i = 0; i < resultArr.length; i++) {
        value *= resultArr[i]
    }
    return value;
}

//ProductOfArray with no helper
function noHelpProdOfArr(arr, temp = 1) {
    temp *= arr[0]
    arr.shift();
    if (arr.length) return noHelpProdOfArr(arr, temp);
    return temp;
}

//Coding Exercise 13
// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 

function recursiveRange(num) {
    if (num === 0) return 0;
    return num + recursiveRange(num - 1);
}

//Included Negative Numbers
function fullRecursiveRange(num) {
    if (num < 0) return num + fullRecursiveRange(num + 1)
    if (num === 0) return 0;
    return num + fullRecursiveRange(num - 1);
}

//Coding Exercise 14
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function fib(num) {
    if (num === 0) {
        return 0;
    }
    if (num === 1) {
        return 1;
    }
    return fib(num - 2) + fib(num - 1);
}

//Coding Exercise 15
//Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
    const reversed = [];
    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }
        reversed.unshift(helperInput[0]);
        helper(helperInput.slice(1));
    }
    helper(str);
    return reversed.join("");
}

//Reverse function with no helper
function noHelperReverse(str, arr = []) {
    arr.unshift(str[0]);
    let newStr = str.slice(1);
    let reversed = arr.join('');
    if (str.length > 1) return noHelperReverse(newStr, arr)
    return reversed;
}

//Coding Exercise 16
//Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(str) {
    let len = str.length;
    let arr = [];
    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }
        arr.push(helperInput[0]);
        helper(helperInput.slice(1));
    }
    helper(str);

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] !== arr[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function noHelpIsPalindrome(str) { //racecar
    const start = 0;
    const half = Math.floor(str.length / 2);
    const end = str.length - 1;
    if (str[start] === str[end] && str.length) {
        return noHelpIsPalindrome(str.slice(start + 1, end));
    }
    if (str === str[half] || str.length === 0) return true;
    else return false;
}

//Coding Exercise 17
//Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

function someRecursive(arr, callback) {
    if (arr.length === 0) {
        return false;
    }
    if (callback(arr[0]) === true) {
        return true;
    }
    return someRecursive(arr.slice(1), callback);
}

function shortSomeRecursive(arr, callback) {
    if (arr.length === 0) return false;
    if (callback(arr[0]) === true) return true;
    else return exercise(arr.slice(1), callback);
}


//Coding Exercise 18
//Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arrOfArrs) {
    let arr = [];
    for (let i = 0; i < arrOfArrs.length; i++) {
        if (Array.isArray(arrOfArrs[i]) === false) {
            arr.push(arrOfArrs[i]);
        } else {
            arr = arr.concat(flatten(arrOfArrs[i]));
        }
    }
    return arr;
}

function altFlatten(arrOfArrs) {
    let arr = [];
    let flatArr = arrOfArrs.concat.apply([], arrOfArrs);
    for (let i = 0; i < arrOfArrs.length; i++) {
        if (Array.isArray(arrOfArrs[i])) {
            return altFlatten(flatArr);
        } else {
            arr.push(arrOfArrs[i]);
        }
    }
    return arr;
}

//Coding Exercise 19
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst() {
    let capArr = [];
    function helper(helperInput) {
        if (helperInput.length === 0) return;
        if (helperInput.length > 0) {
            capArr.push(helperInput[0].charAt(0).toUpperCase() + helperInput[0].slice(1));
            return helper(helperInput.splice(1));
        }
    }
    helper(arrOfStr);
    return capArr;
}

//No He;per
function noHelpCapitalizeFirst(arr, capArr = []) {
    if (arr.length) {
        let cappedStr = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
        capArr.push(cappedStr);
        return noHelpCapitalizeFirst(arr.slice(1), capArr);
    }
    return capArr;
}

//Coding Exercise 20
// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(objName) {
    let num = 0;
    function helper(helperInput) {
        for (const key in helperInput) {
            if (typeof helperInput[key] === 'number') {
                if (helperInput[key] % 2 === 0) {
                    num += helperInput[key];
                }
            }
            if (typeof helperInput[key] === 'object') {
                num += nestedEvenSum(helperInput[key]);
            }
        }
    }
    helper(objName);
    return num;
}

//No Helper
function noHelpNestedEvenSums(obj, num = 0) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') num += noHelpNestedEvenSums(obj[key]);
        else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) num += obj[key];
    }
    return num;
}

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};


//Coding Exercise 21
// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

let words = ['i', 'am', 'learning', 'recursion'];

function capitalizeWords() {
    let capsArr = [];
    function helper(helperInput) {
        for (let i = 0; i < helperInput.length; i++) {
            if (typeof helperInput[i] === 'string') {
                capsArr.push(helperInput[i].toUpperCase());
                return helper(helperInput.splice(1));
            }
        }
    }
    helper(arr)
    return capsArr;
}

//Coding Exercise 22
// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

function stringifyNumbers(obj) {
    let newObj = {};
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString();
        }
        else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[key] = exercise(obj[key]);
        }
        else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}


let obj3 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

//Coding Exercise 23
// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

function collectStrings(obj) {
    let arr = [];
    function helper(helperInput) {
        for (let key in helperInput) {
            if (typeof helperInput[key] === 'string') {
                arr.push(helperInput[key]);
            }
            if (typeof helperInput[key] === 'object') {
                helper(helperInput[key]);
            }
        }
    }
    helper(obj);
    return arr;
}

const obj4 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

//Exercise 24 
// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.
// Don't use indexOf to implement this function!

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

//Exercise 25
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
// and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor(arr.length / 2);
    if (middle !== val) {
        if (val < middle) {
            right = middle - 1;
            middle = Math.floor(right / 2);
        }
        else {
            left = middle + 1;
            middle = Math.floor(left * 1.5);
        }
        return arr.indexOf(val);
    }
    return -1;
}

// Bonus Naive String Pseudocode
// Write a function that accepts a string and a substring, and counts the number of times the substring appears within the string and returns that number

function countSubstring(str, subStr) {
    let count = 0;
    let otherCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === subStr[0]) {
            for (let j = 0; j < subStr.length; j++) {
                if (str[i + j] === subStr[j]) otherCount++;
                if (otherCount === subStr.length) count++;
            }
            otherCount = 0;
        }
    }
    return count;
}

// Swap Functions

// const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     noSwaps = false;
// }

// function swap(arr, idx1, idx2) {
//     let temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = temp;
// }

// Bonus bubble Sorting Pseudocode

function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}


// Bonus Selection Sorting Pseudocode

function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let compare = arr[j];
            if (compare < min) {
                min = compare;
            }
            if (min !== arr[i]) {
                swap(arr, i, j)
            }
        }
    }
    return arr;
}

function altSelectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) swap(arr, i, min)
    }
    return arr;
}

// Bonus Insertion Sort Pseudocode

// function insertionSort(arr) {
//     let currentVal;
//     for (let i = 1; i < arr.length; i++) {
//         currentVal = arr[i]
//         for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j + 1] = arr[j];
//         }
//         arr[j + 1] = currentVal;
//     }
//     return arr;
// }


function insertionSort(arr) { //Var works instead of let due to var being function scoped and let being block-scoped
    let currentVal;
    for (let i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

function notInsertionSort(arr) { //It is similar, but works differently than the one above
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            for (let j = 0; j < i; j++) {
                if (arr[i] < arr[j]) {
                    swap(arr, i, j);
                }
            }
        }
    }
    return arr;
}

//Merge Function Pseudocode for Merge Sort

// function merge(arr1, arr2) {
//     let sortedArr = [];
//     let counter1 = 0;
//     let counter2 = 0;
//     while (counter1 < arr1.length && counter2 < arr2.length) {
//         for (var i = counter1; i < arr1.length; i++) {
//             if (arr1[i] <= arr2[j]) {
//                 sortedArr.push(arr1[i]);
//                 counter1++;
//             }
//             if (counter1 === arr1.length) {
//                 while (counter2 !== arr2.length) {
//                     sortedArr.push(arr2[j]);
//                     counter2++;
//                     j++;
//                 }
//             }
//             else {
//                 break;
//             }
//         }
//         for (var j = counter2; j < arr2.length; j++) {
//             if (arr2[j] <= arr1[i]) {
//                 sortedArr.push(arr2[j]);
//                 counter2++;
//             }
//             if (counter2 === arr2.length) {
//                 while (counter1 !== arr1.length) {
//                     sortedArr.push(arr1[i]);
//                     counter1++;
//                     i++;
//                 }
//             }
//             else {
//                 break;
//             }
//         }
//     }
//     return sortedArr;
// }


let data = Array.apply(null, { length: 100000 }).map(Function.call, Math.random);

function merge(arr1, arr2) {
    let sortedArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            sortedArr.push(arr1[i]);
            i++;
        } else {
            sortedArr.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        sortedArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        sortedArr.push(arr2[j]);
        j++;
    }
    return sortedArr;
}


//Merge Function Pseudocode

// function notMergeSort(arr) {
//     let newArr = [];
//     let sortedArr = [];
//     function helper(helperInput) {
//         const firstHalf = 0;
//         let secondHalf = Math.floor(helperInput.length / 2);
//         let arr1 = helperInput.slice(firstHalf, secondHalf);
//         let arr2 = helperInput.slice(secondHalf);
//         if (arr1.length > 0) {
//             if (arr1.length <= 1) {
//                 newArr.push(arr1);
//             }
//             else {
//                 helper(arr1);
//             }
//         }
//         if (arr2.length > 0) {
//             if (arr2.length <= 1) {
//                 newArr.push(arr2);
//             }
//             else {
//                 helper(arr2);
//             }
//         }
//     }
//     helper(arr)

//     while (newArr.length > 0) {
//         let combArr = merge(sortedArr, newArr[0]); //merge function above
//         newArr.shift();
//         sortedArr = combArr;
//     }
//     return sortedArr;
// }

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    return merge(left, right);
}


//Quick Sort Pivot Helper Pseudocode

function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (array, idx1, idx2) => {
        [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    }
    let piv = arr[start];
    let swapIndex = 0;
    for (let i = start; i <= end; i++) {
        if (piv > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}


//Quick Sort Function Pseudocode

function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
        let swapIdx = pivot(array, left, right);
        quickSort(array, left, swapIdx - 1);
        quickSort(array, swapIdx + 1, right);
    }
    function pivot(arr, start = 0, end = arr.length - 1) {
        const swap = (array, idx1, idx2) => {
            [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
        }
        let piv = arr[start];
        let swapIndex = start;
        for (let i = start; i <= end; i++) {
            if (piv > arr[i]) {
                swapIndex++;
                swap(arr, swapIndex, i);
            }
        }
        swap(arr, start, swapIndex);
        return swapIndex;
    }
    return array;
}


//Radix Sort: Helper Methods

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, digitCount(nums[i]));
    }
    return max;
}

//Radix Sort Pseudocode

function radixSort(nums) {
    let max = mostDigits(nums);
    for (let i = 0; i < max; i++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < nums.length; j++) {
            let digit = getDigit(nums[j], i);
            digitBuckets[digit].push(nums[j]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}
