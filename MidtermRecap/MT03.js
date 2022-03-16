function capToFront(str){
    let last = str.match(/[a-z]/g).join("");
    let font = str.match(/[A-Z]/g).join("");
    let mes=font+last;
    return mes;
}

console.log(capToFront("hApPy")); 
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE")); 