/*
    Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
    cannot use additional data structures? 

    str = "abcd"
*/

// solution using map
const checkUniqueString = (str) => {
    if(!str){
        return true
    }
    let map = {};
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if(map[element]){
            return false
        }
        map[element] = 1
    }
    return true
}

// without using map
const checkUniqueStringNoSpace = (str) => {
    if(!str){
        return true
    }
    str = str.split().sort().join()
    for (let i = 1; i < str.length; i++) {
        const element = str[i];
        if(element === str[i-1]){
            return false
        }
    }
    return true
}

console.log(checkUniqueStringNoSpace("abcd"))