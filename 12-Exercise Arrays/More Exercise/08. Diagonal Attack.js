function f2(array) {
    const matrix = [];
    for (let i = 0; i < array.length; i++) {
        matrix[i] = array[i].split(" ");
        for (let j = 0; j < array.length; j++) {
            matrix[i][j] = Number(matrix[i][j]);
        }
    }
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < matrix.length; i++) {
        sum1 += matrix[i][i];
    }

    for (let j = 0; j < matrix.length; j++) {
        sum2 += matrix[matrix.length - 1 - j][j];

    }



    if (sum1 !== sum2) {
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(" "));
        }
    } else {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (i !== j && (i + j) !== (matrix.length-1)) {
                    matrix[i][j] = sum1;
                }
            }

        }

        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(" "));
        }
    }


}

//-----------------
f2(
    ['1 1 1',
'1 1 1',
'1 1 0']
);



//console.log(`-----------------`);