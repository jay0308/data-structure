/*
One Away: There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.
EXAMPLE
pale, ple -> true
pales. pale -> true
pale. bale -> true
pale. bake -> false
Hints: #23, #97, #130
*/
/*
Steps
    1. create maps of each character counts of both the string
    2. compare both the hashmaps and find the no. of operation needed
*/

const checkEdits = (str1,str2) => {
    let strMap1 = {}, strMap2 = {},diff = 0;
    str1.split("").forEach(element => {
        if(strMap1[element]){
            strMap1[element] += 1
        }else{
            strMap1[element] = 1
        }
    });
    str2.split("").forEach(element => {
        if(strMap2[element]){
            strMap2[element] += 1
        }else{
            strMap2[element] = 1
        }
    });
    Object.keys(strMap1).forEach((ele) => {
        if(strMap1[ele] === strMap2[ele]){
            delete strMap1[ele]
            delete strMap2[ele]
        }else{
            diff = Math.abs(strMap1[ele] - strMap1[ele])
            if(diff > 1){
                return false
            }
        }
    })
    diff = Object.keys(strMap1).length;
    if(diff > 1){
        return false
    }
    diff = Object.keys(strMap2).length;

    if(diff > 1){
        return false
    }

    if(Object.keys(strMap1).length > 0 && Object.keys(strMap2).length > 0){
        if(strMap1[Object.keys(strMap1)[0]] === 1 && strMap2[Object.keys(strMap2)[0]] === 1){
            return true 
        }
        return false
    }

    let keys = Object.keys(strMap1).length > 0 ? Object.keys(strMap1) : Object.keys(strMap2)
    diff = strMap1[keys[0]] || strMap2[keys[0]]

    if(diff > 1){
        return false
    }

    return true
}

console.log(checkEdits("pale", "ple"))
console.log(checkEdits("pales", "pale"))
console.log(checkEdits("pale", "bale"))
console.log(checkEdits("pale", "bake"))