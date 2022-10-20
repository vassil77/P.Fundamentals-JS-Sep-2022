function f2(params) {
    let n = Number(params.shift());
    let template = [];
    for (let i = 0; i < n; i++) {
        template[i] = params.shift().split(' ').map(Number);
    }

    let matrix = [];
    let matrixLength = params.length;
    for (let i = 0; i < matrixLength; i++) {
        matrix[i] = params.shift().split(' ').map(Number);
    }

    let message = [];
    for (let i = 0; i < matrix.length; i += n) {
        message[i] = [];
        if (i + 1 < matrix.length) {
            message[i + 1] = [];
        }
        for (let j = 0; j < matrix[0].length; j += template[0].length) {
            for (let k = 0; k < n; k++) {
                for (let l = 0; l < template[0].length; l++) {
                    if (i + k < matrix.length && j + l < matrix[0].length) {
                        message[i + k][j + l] = decoding(matrix[i + k][j + l], template[k][l]);
                    }
                }
            }
        }
    }


    let result = [];
    for (let k = 0; k < message.length; k++) {
        result.push(message[k].join(''));
    }

    //console.log(...template);
    //console.log(...matrix);
    console.log(...message);
    //console.log(result[0]);
    console.log(result.join(''));

    //console.log(decoding(30,33));

    function decoding(a, b) {
        if ((a + b) % 27 === 0) {
            return ' ';
        } else {
            return String.fromCharCode((a + b) % 27 + 64);
        }
    }
}

//-----------------
f2(
    [
        '2',
        '31 32',
        '74 37',
        '19 0 23 25',
        '22 3 12 17',
        '5 9 23 11',
        '12 18 10 22'
    ]
);



//console.log(`-----------------`);