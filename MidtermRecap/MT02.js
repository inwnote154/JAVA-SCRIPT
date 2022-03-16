function hightestDigit(number){
    let num1 = number;
    let num3 = 0;
    while(num1 > 0){
        let num2 = num1 % 10;
        if (num2 >= num3){num3=num2};
        num1 = parseInt(num1/10);
    }
    return num3;
}

console.log(hightestDigit(379)); 
console.log(hightestDigit(2)); 
console.log(hightestDigit(377401)); 