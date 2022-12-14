function f2(params) {
    let rows = Number(params.shift());
    let columns = Number(params.shift());
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = params.shift().split(' ').map(Number);
    }

    let resultArr = [];
    let i = 0;
    let j = 0;
    let iMin = 1;
    let jMin = 0;
    let iMax = rows - 1;
    let jMax = columns - 1;
    let iDelta = 0;
    let jDelta = 1;
    for (let n = 0; n < rows * columns; n++) {
        resultArr.push(matrix[i][j]);
        if (iDelta === 1 && i === iMax) {
            iDelta = 0;
            iMax--;
            jDelta=-1;
        }
        if (iDelta === -1 && i === iMin) {
            iDelta = 0;
            iMin++;
            jDelta=1;
        }

        if (jDelta === 1 && j === jMax) {
            jDelta = 0;
            jMax--;
            iDelta=1;
        }
        if (jDelta === -1 && j === jMin) {
            jDelta = 0;
            jMin++;
            iDelta=-1;
        }

        i+=iDelta;
        j+=jDelta;

    }

    console.log(resultArr.join(' '));
}

// JUDGE
f2([
        3,
        4,
        '8 12 4 3',
        '19 34 48 61',
        '43 13 92 14'


    ]

);