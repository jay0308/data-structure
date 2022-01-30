/*
Given an array of DISTINCT elements, rearrange the elements of array in zig-zag fashion in O(n) time. The converted array should be in form a < b > c < d > e < f. 

Example:

Input: arr[] = {4, 3, 7, 8, 6, 2, 1} 
Output: arr[] = {3, 7, 4, 8, 2, 6, 1}

Input: arr[] = {1, 4, 3, 2} 
Output: arr[] = {1, 4, 2, 3}
*/

const zigZagArrangement = (array) => {
    let flag = 0;
    for (let i = 0; i < array.length-1; i++) {
        const element = array[i];
        if(flag === 0){
            if(element > array[i+1]){
                swap(array,i,i+1)
            }
            flag = 1;
        }else{
            if(element < array[i+1]){
                swap(array,i,i+1)
            }
            flag = 0
        }
        
    }
    return array;
}

const swap = (array,i,j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return array;
}

console.log(zigZagArrangement([4, 3, 7, 8, 6, 2, 1]))
console.log(zigZagArrangement([1,4,3,2]))