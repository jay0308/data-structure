/*
Given an array, find an element before which all elements are smaller than it, and after which all are greater than it. Return the index of the element if there is such an element, otherwise, return -1.

Examples:

Input: arr[] = {5, 1, 4, 3, 6, 8, 10, 7, 9}; 
Output: 4 
Explanation: All elements on left of arr[4] are smaller than it 
and all elements on right are greater.

Input: arr[] = {5, 1, 4, 4}; 
Output: -1 
Explanation : No such index exits.
*/

const getHeapPointInArray = (array) => {
    let leftMax = [];
    let rightMin = [];
    let _leftMax = Number.MIN_VALUE;
    let _rightMin = Number.MAX_VALUE
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element > _leftMax){
            _leftMax = element;
        }
        leftMax[i] = _leftMax
    }
    for (let i = array.length-1; i >= 0; i--) {
        const element = array[i];
        if(element < _rightMin){
            _rightMin = element;
        }
        rightMin[i] = _rightMin
    }
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element > leftMax[i-1] && element < rightMin[i+1]){
            return i
        }
    }
    return -1
}

console.log(getHeapPointInArray([5, 1, 4, 3, 6, 8, 10, 9, 9]))
console.log(getHeapPointInArray([5, 1, 4, 4]))