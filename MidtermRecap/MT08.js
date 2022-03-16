function simplePair(arr ,number) {
    let arr1=[];
    let num1=0;
    let x=1
    for(i=0;i<arr.length;i++){
        for(let j=x;j<arr.length;j++){
            num1=arr[i]*arr[j];
            if(num1==number){
                arr1.push(arr[i],arr[j])
                return(arr1);
            }
        }
        x+=1;
        if(x>arr.length){
            return("null");
        }
    }
}

console.log(simplePair([1,2,3],3));
console.log(simplePair([1,2,3],6));
console.log(simplePair([1,2,3],9));