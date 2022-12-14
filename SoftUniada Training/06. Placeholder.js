function f2(params) {
    let N = Number(params.shift());

    let matrix = [];
    for (let i = 0; i < N; i++) {
        matrix[i] = params.shift().split(' ').map(Number).sort((a, b) => b - a);
    }

    for (const row of matrix) {
        let delta01 = Math.abs(row[0]-row[1]);
        let delta02 = Math.abs(row[0]-row[2]);
        let delta12 = Math.abs(row[1]-row[2]);
        let minDelta = Math.min(delta01, delta02, delta12);
        let buffer;
        switch (minDelta) {
            case delta01:
                buffer = row[2];
                row[2] = row[1];
                row[1] = row[0];
                row[0] = buffer;
                break;

            case delta02:
                buffer = row[1];
                row[1] = row[0];
                row[0] = buffer;
                break;
                default:
                break;
        }
    }


    matrix = matrix.sort((a, b) => a[2] - b[2]);
    matrix = matrix.sort((a, b) => a[1] - b[1]);


    // console.table(matrix);

    // for (let i = 0; i < matrix.length - 1; i++) {
    //     if (matrix[i][2] > matrix[i + 1][2]) {
    //         let buffer = matrix[i+1][0];
    //         matrix[i+1][0] = matrix[i+1][2];
    //         matrix[i+1][2] = buffer;
    //     }
    // }

    let totalHeight = 0;
    for (const row of matrix) {
        totalHeight += row[0];
    }

    console.table(matrix);
    console.log(totalHeight);
}
// JUDGE
f2 ([
    '10',
    '3 2 1',
    '40 5 6',
    '5 5 30',
    '4 1 2',
    '5 6 1',
    '30 30 4',
    '50 60 302',
    '11 1 20',
    '4 4 1001',
    '5 1 1',

]);



