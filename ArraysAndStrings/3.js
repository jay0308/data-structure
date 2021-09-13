/*
    URLify: Write a method to replace all spaces in a string with '%20: You may assume that the string
    has sufficient space at the end to hold the additional characters, and that you are given the "true"
    length of the string. (Note: If implementing in Java, please use a character array so that you can
    perform this operation in place.)
    EXAMPLE
    Input: "Mr John Smith "J 13
    Output: "Mr%20J ohn%20Smith"
*/

const urlify = (str,replace = "%20") => {
    str.trim();
    let strArr = str.split("")
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if(element === " "){
            strArr.push("")
            strArr.push("")
        }
    }
    for (let i = str.length - 1,j=strArr.length; i >= 0; i--){
        if(str[i] === " "){
            strArr[--j] = replace[2]
            strArr[--j] = replace[1]
            strArr[--j] = replace[0]
        }else{
            strArr[--j] = str[i]
        }
    }
    return strArr.join("")
}
console.log(urlify("My name is khan"))