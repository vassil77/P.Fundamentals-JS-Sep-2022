function PrintAndSum(m,n) {
    let row="";
    let sum=0;

    for (let i = m; i <=n; i++) {
        row+=`${i} `;
        sum+=i;
        
    }
console.log(row);
console.log(`Sum: ${sum}`);


}

PrintAndSum(  50, 60 );



//console.log(`-----------------`);