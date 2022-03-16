function getBudgets(mes){
    let sum=mes[0].budget+mes[1].budget+mes[2].budget;
    console.log(sum);
}

getBudgets([
    {name: "John",age: 21,budget: 23000},
    {name: "Steve",age: 32,budget: 40000},
    {name: "Martin",age: 16,budget: 2700}
]);
getBudgets([
    {name: "John",age: 21,budget: 29000},
    {name: "Steve",age: 32,budget: 32000},
    {name: "Martin",age: 16,budget: 1600}
]);
