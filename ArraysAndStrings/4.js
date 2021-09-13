/*
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat". "atco cta". etc.)
Hints: #106, #121, #134, #136 
 */

/*
    1. count each characters
    2. only one character allowed odd and all should be even if this condition satisfy means it's a permutatio 
    of the palindrome
*/

const checkPermuationOfPalindrome = (str) => {
    let map = {}
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if(element !== " "){
            if(map[element]){
                map[element] += 1;
            }else{
                map[element] = 1;
            }
        }
    }
    let oddCount = 0;
    Object.keys(map).forEach((element)=>{
        if(map[element] % 2 === 1){
            oddCount++
        }
    })
    console.log(map,oddCount)
    return oddCount > 1 ? false : true
}

console.log(checkPermuationOfPalindrome("asdsadm"))