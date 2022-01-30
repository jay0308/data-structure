/*
Given a 2D array, print it in spiral form. See the following examples.

Examples: 

Input:  1    2   3   4
        5    6   7   8
        9   10  11  12
        13  14  15  16
Output: 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10 
Explanation: The output is matrix in spiral format. 

Input:  1   2   3   4  5   6
        7   8   9  10  11  12
        13  14  15 16  17  18
Output: 1 2 3 4 5 6 12 18 17 16 15 14 13 7 8 9 10 11
Explanation :The output is matrix in spiral format.
*/

const printSpiralMatrix = (matrix) => {
    
    let r=0;
    // print left to right
    for (let i = r; i < matrix[r].length-1; i++) {
        const element = matrix[r][i];
        console.log(element)
    }

    let l = matrix[r].length - 1
    // print top to bottom
    for (let i = r; i < matrix.length-1; i++) {
        const element = matrix[i][l];
        console.log(element)
    }

    let m = matrix[r].length - 1
    // print right to left
    for (let i = r; i < matrix.length-1; i++) {
        const element = matrix[i][l];
        console.log(element)
    }

    // print bottom to top
}

printSpiralMatrix([
    [1 , 2  , 3 ,  4 , 5  , 6],
        [7  , 8 ,  9 , 10 , 11 , 12],
        [13 , 14 , 15 , 16 , 17 , 18]
])