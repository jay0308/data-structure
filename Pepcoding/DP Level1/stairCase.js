/*
    Find no. of ways from 0 to n (moves 1step, 2step, 3step)
    - by memoziation
    - by tabulation
*/

const findWaysByMemo = (n) => {
    const findWays = (num,stair,dp) => {
        if(stair > num){
            return 0;
        }
        if(stair == num){
            return 1;
        }
        if(dp[stair] != undefined){
            return dp[stair]
        }
        console.log("Hello",stair)
        let path1 = findWays(num,stair + 1,dp)
        let path2 = findWays(num,stair + 2,dp)
        let path3 = findWays(num,stair + 3,dp)

        dp[stair] = path1 + path2 + path3

        return path1 + path2 + path3
    }

    return findWays(n,0, {});
}

const findWaysByTabulation = (n) => {
    const findWays = (num,stair,dp) => {
       for(let i=dp.length-1;i>=0;i--){
           if(i == dp.length -1){
               dp[i] = 1;
           }else{
               dp[i] += dp[i+1] || 0;
               dp[i] += dp[i+2] || 0;
               dp[i] += dp[i+3] || 0;
           }
       }
       return dp[0]
    }

    return findWays(n,0, new Array(n + 1).fill(0));
}

console.log(findWaysByMemo(7))
console.log(findWaysByTabulation(7))
