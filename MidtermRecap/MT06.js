function removeDups(arr) {
    let arr1=[];
    let x=false
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr1.length;j++){
            if(arr1[j]==arr[i]){
                x=true;    
            }
        }
        if(x){x=false}
        else {
            arr1.push(arr[i])
        }
    }
    return (arr1);
}

console.log(removeDups([1,0,1,0]));
console.log(removeDups(["The","big","cat"]));
console.log(removeDups(["John","Taylor","John"]));