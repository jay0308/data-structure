/*
Given an unsorted array of integers, find a subarray that adds to a given number. If there is more than one subarray with the sum of the given number, print any of them.

Examples:  

Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
Output: Sum found between indexes 2 and 4
Explanation: Sum of elements between indices
2 and 4 is 20 + 3 + 10 = 33

Input: arr[] = {-10, 2, -2, -20, 10}, sum = -10
Output: Sum found between indexes 0 to 3
Explanation: Sum of elements between indices
0 and 3 is 10 + 2 - 2 - 20 = -10

Input: arr[] = {-10, 0, 2, -2, -20, 10}, sum = 20
Output: No subarray with given sum exists
Explanation: There is no subarray with the given sum
*/

const getSubArrayOfSum = (arr,target) => {
    let map = {};
    let ssf = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        ssf = element + ssf;
        if(map[ssf - target]){
            return {from:map[ssf - target],to:i}
        }else{
            map[ssf] = i+1
        }
    }
    return -1
}

console.log(getSubArrayOfSum([1, 4, 20, 3, 10, 5],33))