function f2(params) {
    let index = 0;
    let width = Number(params[index++]);
    let height = Number(params[index++]);
    let y = Number(params[index++]);
    let x = Number(params[index++]);

    const matrix = [];

    for (let i = 0; i < height; i++) {
        matrix[i] = [];
        for (let j = 0; j < width; j++) {
            matrix[i][j] = 9;
        }
    }

    let max = Math.max(height, width);

    for (let k = max - 1; k >= 1; k--) {
        for (let i = Math.max(0, y - k); i <= Math.min(height - 1, y + k); i++) {
            for (let j = Math.max(0, x - k); j <= Math.min(width - 1, x + k); j++) {
                matrix[i][j] = k + 1;
            }
        }
    }
    matrix[y][x] = 1;

    for (let i = 0; i < height; i++) {

        console.log(matrix[i].join(" "));
    }

}

//-----------------
f2(
    [5,5,2,2]
);



//console.log(`-----------------`);