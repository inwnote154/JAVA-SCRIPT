function isValidIP(ip) {
    let data = ip.split('.');
    if (data.length == 4){
        for(let i = 0; i < 4 ; i++){
            if((data[i] < 1)||(data[i] > 255)){return false}
            let num = data[i].split('');
            if(num[0] == 0){return false}
            if(num[num.length-1] == 0){return false}
        }
        return true;
    }
    return false;
}

console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089")); 