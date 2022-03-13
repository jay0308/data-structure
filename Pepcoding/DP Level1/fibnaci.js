/*

Fibonnaci series using DP concept Memoization

*/

const fibnaci = (n) => {
    const calculateFib = (num,dp) => {
        if(num == 0 || num == 1){
            return num
        }
        if(dp[num] != undefined){
            return dp[num]
        }
        let fib1 = calculateFib(num - 1,dp);
        let fib2 = calculateFib(num - 2,dp);
        let fib = fib1 + fib2;
        dp[num] = fib
        return fib
    }
    return calculateFib(n,{});
}

console.log(fibnaci(10))