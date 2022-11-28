function f2(params) {
    let array = params[0].split('|');
    let result = "";
    let regex0 = /0+/g;
    let regex1 = /1+/g;

    for (let sequence of array) {
        let sum = 0;

        let matches0 = sequence.match(regex0);
        if (matches0) {
            for (const match of matches0) {
                sum += 3 * match.length;
                if (match.length > 1) {
                    sum += match.length;
                }
            }
        }

        let matches1 = sequence.match(regex1);
        if (matches1) {
            for (const match of matches1) {
                sum += 5 * match.length;
                if (match.length > 1) {
                    sum += match.length;
                }
            }
        }
        // console.log(matches0);
        // console.log(matches1);

        result += String.fromCharCode(sum);
        // console.log(sum);
    }



    console.log(result);
}

// JUDGE
f2(
    [
        '01010101010101011|111001111100001111110|111001111100001111110|000011000011111010110|110010011010101011100|11110000000100110011010101|110001100101110101101'
    ]
);