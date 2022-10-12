//Fibonacci Recursive Solution w/ Memoization

function memFib(n, memo = []) { //We store the answers we find into memo as we go along
    if (memo[n] !== undefined) return memo[n] //If we have fibonacci(n), we immediately pull it when called
    if (n <= 2) return 1; //Sets the base case to be 1, 1
    let res = memFib(n - 1, memo) + memFib(n - 2, memo); //Use a variable to make what we are doing more clear
    memo[n] = res; //we have res calculated and stored under memo[n]
    return res; //Then, we return memo[n];
}

//Fibonacci Recursiv Solution w/ Tabulation

function tabFib(n) {
    if (n <= 2) return 1;
    let fibNums = [0, 1, 1]; //Create an array to store data
    for (let i = 3; i <= n; i++) { //For each n >= 3
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2]; //Have the array of n = the array of n-1 + n-2
    }
    return fibNums[n]; //Return the array at position n
}