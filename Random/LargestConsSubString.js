/*
Given a string, return the length of the longest substring which comprises consecutive characters.
input: xyzdefg
Output:
4
defg

Read more: https://javarevisited.blogspot.com/2015/12/30-microsoft-interview-questions-for-software-development-engineers.html#ixzz76eYDk0kM
*/

const getLargestConsSubString = (str) => {
    let maxSoFar = ""
    let currSubStr = "";

    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        let code1 = str.charCodeAt(i)
        let code2 = str.charCodeAt(i+1)
        if(element === "z"){
            code1 = "a".charCodeAt(0) - 1;
        }
        if(element === "Z"){
            code1 = "A".charCodeAt(0) - 1;
        }
        if(i === str.length - 1 || code1+1 === code2){
            currSubStr += element
        }else{
            if(currSubStr.length > maxSoFar.length){
                maxSoFar = currSubStr
            }
            currSubStr = "";

        }
        
    }
    if(currSubStr.length > maxSoFar.length){
        maxSoFar = currSubStr
    }
    return maxSoFar;
}

console.log(getLargestConsSubString("xyzabcdZABCDEFGHIJK"))