function numberSplit(number){
    let num1 = parseInt(number/2);
    let num2 = number-num1;
    let arr1 = [];
    if (num1<num2){
        arr1.push(num1,num2);
    }
    else {arr1.push(num2,num1)}
    return arr1;
}

console.log(numberSplit(4)); 
console.log(numberSplit(10)); 
console.log(numberSplit(11)); 
console.log(numberSplit(-9)); 