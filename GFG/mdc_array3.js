/*
Write an efficient program to find the sum of contiguous subarray within a one-dimensional array of numbers that has the largest sum. 
 */

const largestSumArray = (array) => {
    let max_sum_so_far = Number.MIN_VALUE;
    let max_ending_here = 0;
    array.forEach(element => {
        max_ending_here = max_ending_here + element;
        if(max_ending_here > max_sum_so_far){
            max_sum_so_far = max_ending_here
        }
        if(max_ending_here < 0){
            max_ending_here = 0
        }
    });
    return max_sum_so_far
}

console.log(largestSumArray([-2,-3,4,-1,-2,1,5,-3]))