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
    for (let i = 0; i < matrix.length; i ++) {
        message[i] = [];
        for (let j = 0; j < matrix[0].length; j ++) {
            message[i][j] = decoding(matrix[i][j], template[i % n][j % template[0].length]);
        }
    }


    let result = [];
    for (let k = 0; k < message.length; k++) {
        result.push(message[k].join(''));
    }

    //console.log(...template);
    //console.log(...matrix);
    //console.log(...message);
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