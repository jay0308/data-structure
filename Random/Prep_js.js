/**
 * 
 * Pollyfils
 */

 Array.prototype.myMap = function(fn){
    let resultArr = [];
    for (let i = 0; i < this.length; i++) {
        resultArr.push(fn(this[i]))
    }
    return resultArr;
 }


 let arr = [1,2,3,4,5].myMap(e=> e*2)

 console.log(arr)


 /**
  * 
  * {100, 180, 260, 310, 40, 535, 695}
  * {,515,435,385,655,160,0}
  */