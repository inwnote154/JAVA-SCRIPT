const equation = (value,convert) =>{
    let a = value.split(" ");
    let total = convert(a[0]);
    for (let n=1;n<a.length;n++) {
        if(a[n] == '+') total += convert(a[n+1]);
        if(a[n] == '-') total -= convert(a[n+1]);
        if(a[n] == '*') total *= convert(a[n+1]);
        if(a[n] == '/') total /= convert(a[n+1]);
    }
    return total;
}
const convert = (text) => {
    Number.isNaN(Number.parseInt(text));
    let number=0;
    number = parseInt(text);
    if((text == 'one')) number = 1;
    else if((text == 'two')) number = 2;
    else if((text == 'three')) number = 3;
    else if((text == 'four')) number = 4;
    else if((text == 'five')) number = 5;
    else if((text == 'six')) number = 6;
    else if((text == 'seven')) number = 7;
    else if((text == 'eight')) number = 8;
    else if((text == 'nine')) number = 9;
    else if((text == 'zero')) number = 0;
    return number;
}
console.log("one + 1 = "+equation('one + 1',convert));
console.log("seven * four - two = "+equation('seven * four - two',convert));
console.log("one + one + one + one + one = "+equation('one + one + one + one + one',convert));