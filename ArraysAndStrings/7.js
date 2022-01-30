/*
1.7 Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

1,2,3           7,4,1
4,5,6           8,5,2
7,8,9           9,6,3
*/

const rotateMatrix = (matrix,row,col) => {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            const element = matrix[i][j];
            console.log(element + " ")
        }
        
    }
}

console.log(rotateMatrix([[1,2,3],
[4,5,6],
[7,8,9]],3,3))