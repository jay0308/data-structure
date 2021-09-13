/*
Check Permutation: Given two strings, write a method to decide if one is a permutation of the
other. 
*/

//time complexity O(n) n=str length
//space complexity O(1)
const checkPermutationStringWithSpace = (str1,str2) => {
    if(str1.length !== str2.length){
        return false;
    }
    let charArr = new Array(128).fill(0);
    for (let i = 0; i < str1.length; i++) {
        const index1 = str1.charCodeAt(i);
        const index2 = str2.charCodeAt(i);
        charArr[index1] = charArr[index1] + 1;
        charArr[index2] = charArr[index2] - 1;
    }
    for (let i = 0; i < charArr.length; i++) {
        const element = charArr[i];
        if(element !== 0){
            return false;
        }
    }
    return true;
}

console.log(checkPermutationStringWithSpace("abcd","dbba"))