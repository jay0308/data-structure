/*
Given an array of numbers, arrange them in a way that yields the largest value. For example,
if the given numbers are {54, 546, 548, 60}, 
the arrangement 6054854654 gives the largest value. And if the given numbers are 
{1, 34, 3, 98, 9, 76, 45, 4}, then the arrangement 998764543431 gives the largest value.
*/

const merge = (array1,array2) => {
    let l=0,r=0;
    let tmpArr = []
    while(l < array1.length && r < array2.length){
        if(compare(array1[l],array2[r]) === 1){
            tmpArr.push(array1[l])
            l++
        }else if(compare(array1[l],array2[r]) === -1){
            tmpArr.push(array2[r])
            r++
        }else{
            tmpArr.push(array1[l])
            tmpArr.push(array2[r])
            l++
            r++
        }
    }
    if(l < array1.length){
        for (let i = l; i < array1.length; i++) {
            const element = array1[i];
            tmpArr.push(element)
        }
    }
    if(r < array2.length){
        for (let i = r; i < array2.length; i++) {
            const element = array2[i];
            tmpArr.push(element)
        }
    }
    return tmpArr;
}

const compare = (num1,num2) => {
    num1 = num1.toString();
    num2 = num2.toString();
    if(parseInt(num1+num2) > parseInt(num2+num1)){
        return 1
    }else if(parseInt(num1+num2) < parseInt(num2+num1)){
        return -1
    }else{
        return 0
    }
    
}

const makeLargestNoOfArray = (array) => {
    if(array.length  < 2)
        return array

    let subArr = array.splice(0,array.length/2)
    let arrLeft = makeLargestNoOfArray(subArr)
    let arrRight = makeLargestNoOfArray(array)
    return merge(arrLeft,arrRight)
    
}

console.log(makeLargestNoOfArray([1, 34, 3, 98, 9, 76, 45, 4]).join(""))
console.log(makeLargestNoOfArray([54, 546, 548, 60]).join(""))
// console.log(compare(1,116))