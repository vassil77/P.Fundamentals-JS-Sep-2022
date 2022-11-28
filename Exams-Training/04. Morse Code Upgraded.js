function f2(params) {
    let array = params[0].split('|');
    let result = "";

    for (let sequence of array) {
        let sum;
        if (sequence[0] === '0') {
            sum = 3;
        } else {
            sum = 5;
        }
        let equals = 1;

        for (let i = 1; i < sequence.length; i++) {

            if (sequence[i] === '0') {
                sum += 3;
            } else {
                sum += 5;
            }

            if (sequence[i] === sequence[i - 1]) {
                equals++;
            } else {
                if (equals > 1) {
                    sum += equals;
                    equals = 1;
                }
            }
        }
        if (equals > 1) {
            sum += equals;

        }
        // console.log(sum);
        result += String.fromCharCode(sum);


    }



    console.log(result);
}

// JUDGE
f2(
    [
'01010101010101011|111001111100001111110|111001111100001111110|000011000011111010110|110010011010101011100|11110000000100110011010101|110001100101110101101'
    ]
);