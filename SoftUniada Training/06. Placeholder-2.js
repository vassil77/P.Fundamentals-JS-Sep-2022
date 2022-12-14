function f2(params) {
    let matrix = [];
    let N = Number(params.shift());

    for (let i = 0; i < N; i++) { //Define Matrix
        matrix[i] = {};
        let row = params.shift().split(' ').map(Number).sort((a, b) => b - a);
        matrix[i].height = row[0];
        matrix[i].width = row[1];
        matrix[i].length = row[2];
    }

    for (const row of matrix) { // sort height-width-length
        let delta01 = Math.abs(row.height - row.width);
        let delta02 = Math.abs(row.height - row.length);
        let delta12 = Math.abs(row.width - row.length);
        let minDelta = Math.min(delta01, delta02, delta12);
        let buffer;
        switch (minDelta) {
            case delta01:
                buffer = row.length;
                row.length = row.width;
                row.width = row.height;
                row.height = buffer;
                break;

            case delta02:
                buffer = row.width;
                row.width = row.height;
                row.height = buffer;
                break;
            default:
                break;
        }
    }

    matrix = matrix.sort((a, b) => Math.min((a.length - b.length), (a.width - b.width))); //sort by Floors


    // let height1 = height(matrix);
    let currentMatrix = matrix.slice();
    let pattern = matrixPattern(matrix);

    for (let i = 0; i < N; i++) {
        for (let j = 1; j < 6; j++) {
            let currentHeight = height(currentMatrix);

            let nextMatrix = currentMatrix.slice();//copy
            nextMatrix[i] = pattern[i][j];//change
            nextMatrix = nextMatrix.sort((a, b) => Math.min((a.length - b.length), (a.width - b.width))); //sort by Floors
            let nextHeight = height(nextMatrix);
            // console.log(oldHeight); //test
            // console.log(nextHeight); //test

            if (nextHeight > currentHeight) {
                pattern = matrixPattern(nextMatrix);
                currentMatrix = nextMatrix.slice();
                currentHeight = height(currentMatrix);
            } 

            // console.log(height(currentMatrix)); //test
            // console.log('-----------------'); //test

        }
        // console.table(currentMatrix);
        // console.log(height(currentMatrix));
    }

    function matrixPattern(matrix) {
        let allPattern = [];
        for (let i = 0; i < N; i++) { // Pattern with All Possibilities
            allPattern[i] = [];
            allPattern[i][0] = matrix[i];

            allPattern[i][1] = {};
            allPattern[i][1].height = matrix[i].height;
            allPattern[i][1].width = matrix[i].length;
            allPattern[i][1].length = matrix[i].width;

            allPattern[i][2] = {};
            allPattern[i][2].height = matrix[i].length;
            allPattern[i][2].width = matrix[i].height;
            allPattern[i][2].length = matrix[i].width;

            allPattern[i][3] = {};
            allPattern[i][3].height = matrix[i].width;
            allPattern[i][3].width = matrix[i].height;
            allPattern[i][3].length = matrix[i].length;

            allPattern[i][4] = {};
            allPattern[i][4].height = matrix[i].width;
            allPattern[i][4].width = matrix[i].length;
            allPattern[i][4].length = matrix[i].height;

            allPattern[i][5] = {};
            allPattern[i][5].height = matrix[i].length;
            allPattern[i][5].width = matrix[i].width;
            allPattern[i][5].length = matrix[i].height;
        }
        return allPattern;
    }

    function height(matrix) {
        let totalHeight = 0;
        let isValid = true;
        for (let i = 0; i < matrix.length; i++) {
            totalHeight += matrix[i].height;
            if (i < matrix.length - 1) {
                if (matrix[i].width > matrix[i + 1].width || matrix[i].length > matrix[i + 1].length) {
                    isValid = false;
                }
            }
        }

        if (isValid) {
            return totalHeight;
        } else {
            return 0;
        }
    }

    console.table(currentMatrix);
    console.log(height(currentMatrix));

}
// JUDGE


f2([
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


// f2([
//     '3',
//     '4 4 4',
//     '3 3 6',
//     '6 2 2',
   

// ]);