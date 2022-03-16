function totalVolume(...arr) {
    let total=0;
    for(i=0;i<arr.length;i++){
        let sum=1;
        for(j=0;j<arr[i].length;j++){
            sum*=arr[i][j];
        }
        total+=sum;
    } 
    return total;
}

console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]));
console.log(totalVolume([2,2,2],[2,1,1]));
console.log(totalVolume([1,1,1]));