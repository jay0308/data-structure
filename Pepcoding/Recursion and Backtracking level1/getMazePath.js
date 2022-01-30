/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let paths = [];
    let map = {};
    let getPaths = (r,c) => {
        if(r==m-1 && c==n-1){
            return [""]
        }
        if(map[r+""+c]){
            return map[r+""+c]
        }
        let hpaths=[],vpaths=[],combinePaths = [];
        if(c < n-1){
            hpaths = getPaths(r,c+1)
        }
        if(r < m-1){
            vpaths = getPaths(r+1,c)
        }
        hpaths.forEach((e)=>{
            combinePaths.push('h'+e)
        })
        vpaths.forEach((e)=>{
            combinePaths.push('v'+e)
        })
        map[r+""+c] = combinePaths
        return combinePaths
    }
    paths = getPaths(0,0)
    return paths.length;
};

console.log(uniquePaths(23,12))