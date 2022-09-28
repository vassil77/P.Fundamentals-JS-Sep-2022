function SumOfOddNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        console.log(2*i-1);
        sum += 2*i-1;
    }

    console.log(`Sum: ${sum}`);

}


SumOfOddNumbers(3);


//console.log(`-----------------`);