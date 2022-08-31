const form = document.querySelector('#form');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const submit = document.querySelector('#submit');
const question = document.querySelector('.card-title');
const answer = document.querySelector('.card-text');

question.innerText = `Exercise: Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.`;

//Input: string
// OutPut: true or false



function exercise(str) {
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
    // for (let i = 0; i < str.length; i++) {
    //     reversed.unshift(str[i])
    // }
    // return reversed.join("");
    // return exercise(str.slice(1));
}



submit.addEventListener('click', (e) => {
    e.preventDefault();
    answer.innerText = `Output: ${exercise(input1.value, input2.value)}`
})

//Exercise 1
//Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// function exercise(str1, str2) {
//     str1 = str1.value
//     str2 = str2.value
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     let frequency = {};

//     for (let i = 0; i < str1.length; i++) {
//         let letter = str1[i]
//         frequency[letter] ? frequency[letter] += 1 : frequency[letter] = 1;
//     }

//     for (let i = 0; i < str2.length; i++) {
//         let letter = str2[i]
//         if (!frequency[letter]) {
//             return false;
//         } else {
//             frequency[letter] -= 1;
//         }
//     }
//     return true;
// }

//Exercise 2
//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
//MUST RUN IN CONSOLE

// function exercise(arr){
//   if(arr.length === 0) {
//           return 0;
//       }
//       let i = 0;
//       for(let j = 1; j < arr.length; j++) {
//           if(arr[i] !== arr[j]) {
//               i++;
//               arr[i] = arr[j]
//           }
//       }
//       return i + 1;
//   }

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

//Coding Exercise 5
//Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints: Time - O(N) Space - O(1)

function averagePair(arr, targAvg) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        while (left < right) {
            if ((arr[left] + arr[right]) / 2 === targAvg) {
                // console.log(arr[left], arr[right]);
                // console.log(targAvg);
                return true;
            }
            console.log(arr[left], arr[right]);
            left++;
        }
        if (arr.length > 1) {
            arr.pop();
            right--;
            left = 0;
        }
    }
    // console.log(targAvg);
    return false;
}

//Coding Exercise 6
//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Required Constraints: Time - O(N + M) Space - O(1)

function isSubsequence(str1, str2) {
    let left = 0;
    let right = str2.length;
    while (left < right) {
        if (str1[0] === str2[left]) {
            let newstr1 = str1.substring(1);
            let newstr2 = str2.substring(left + 1);
            // console.log('before', str1[0], str2[left], str1, str2);
            str1 = newstr1;
            str2 = newstr2;
            // console.log('after', str1[0], str2[left], str1, str2);
            if (newstr1.length === 0) {
                return true;
            }
            left = -1;
        }
        left++;
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
            console.log(sum);
            if (sum >= num) {
                return tempSumArr.length;
            }
        }
    }
    return 0;
}

//Coding Exercise 9
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

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
    if (x < 0) {
        return 0;
    }
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
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

//Coding Exercise 13
// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 

function recursiveRange(num) {
    if (num === 0) {
        return 0;
    }
    return num + recursiveRange(num - 1);
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

//Coding Exercise 15
//Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.