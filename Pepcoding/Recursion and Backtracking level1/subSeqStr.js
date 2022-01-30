const getSubSeqOfStr = (str) => {
    if(str == ""){
        return [""]
    }

    let fc = str[0];
    let rs = str.substr(1);
    let res = getSubSeqOfStr(rs);
    let resArr = []
    res.forEach((e)=>{
        resArr.push(""+e)
    })
    res.forEach((e)=>{
        resArr.push(fc+e)
    })
    return resArr
}

console.log(getSubSeqOfStr("abcd"))