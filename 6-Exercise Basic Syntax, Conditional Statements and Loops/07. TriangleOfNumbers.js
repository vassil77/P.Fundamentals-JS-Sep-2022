function TriangleOfNumbers(n) {

    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += `${i} `;
        }
        console.log(row);
    }


}

TriangleOfNumbers(5);



//console.log(`-----------------`);