const allIndicesOfArray = (arr,n,target) => {
    if(n == arr.length)
        return []

    let sa = allIndicesOfArray(arr,n+1,target);
    if(arr[n] == target){
        return [n,...sa]
    }
    return sa
}

console.log(allIndicesOfArray([1,2,5,7,2,5,7,2],0,2))