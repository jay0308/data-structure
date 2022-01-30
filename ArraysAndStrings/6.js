/*
String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z).
Hints: #92, # 11 0
*/

const compressStrings = (str) => {
    if(checkUniqueStr(str)){
        return str
    }
    let compressedStr = "";
    let compressCount = 0;
    for (let i = 1; i < str.length; i++) {
        if(str[i] === str[i-1]){
            compressCount += 1
        }else{
            compressedStr += str[i-1]+(compressCount+1)
            compressCount = 0
        }
    }
    if(str[str.length -1] === str[str.length - 2]){
        compressedStr += str[str.length -1]+(compressCount+1)
    }else{
        compressedStr += str[str.length -1] + 1
    }
    return compressedStr
}

const checkUniqueStr = (str) => {
    for (let i = 1; i < str.length; i++) {
        if(str[i] === str[i-1]){
            return false
        }
        
    }
    return true;
}

console.log(compressStrings("aabcccccazz"))
console.log(compressStrings("abcdef"))