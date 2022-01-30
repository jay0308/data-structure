/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let arr = [];
    let backtrackStairs = (num) => {
        if(num == 0){
            return [""]
        }else if(num < 0){
            return []
        }
        
        let path1 = backtrackStairs(num-1)
        let path2 = backtrackStairs(num-2)
        let path3 = backtrackStairs(num-3)
        let combinePaths = [];
        path1.forEach((e)=>{
            combinePaths.push(1+e)
        })
         path2.forEach((e)=>{
            combinePaths.push(2+e)
        })
         path3.forEach((e)=>{
            combinePaths.push(3+e)
        })
        return combinePaths;
    }
    arr = backtrackStairs(n)
    return arr;
    
};

console.log(climbStairs(2))