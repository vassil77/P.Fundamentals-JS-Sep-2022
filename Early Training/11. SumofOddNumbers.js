function SumofOddNumbers(params) {

    let i = 0;
    let n = Number(params[i++]);
    let totalSum = 0;

    for (let j = 1; j <= n; j++) {
        let current = 2 * j - 1;
        console.log(current);
        totalSum += current;
    }
    console.log(`Sum: ${totalSum}`);
}

SumofOddNumbers

    ([5])



;



//console.log(`-----------------`);