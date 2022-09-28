function f2(a, b) {
    const matrix = [];
    for (let i = 0; i < a; i++) {
        matrix[i] = [];
        for (let j = 0; j < b; j++) {
            matrix[i][j] = 0;
        }
    }

    let change = b;
    let i = 0;
    let j = 0;
    let deltai = 0;
    let deltaj = 1;
    let changeCounter = 0;

    for (let num = 1; num <= a * b; num++) {

        matrix[i][j] = num;


        if (num === change) {

            changeCounter++;
            let x;
            switch ((changeCounter % 4)) {
                case 0:
                    deltai = 0;
                    deltaj = 1;
                    x = b - Math.ceil(changeCounter / 2);

                    break;

                case 1:
                    deltai = 1;
                    deltaj = 0;
                    x = a - Math.ceil(changeCounter / 2);
                    break;

                case 2:
                    deltai = 0;
                    deltaj = -1;
                    x = b - Math.ceil(changeCounter / 2);
                    break;

                case 3:
                    deltai = -1;
                    deltaj = 0;
                    x = a - Math.ceil(changeCounter / 2);

                    break;
            }
            change += x;
        }


        i += deltai;
        j += deltaj;
    }
for (let q = 0; q < a; q++) {
    
    console.log(matrix[q].join(" "));
}
    
}

//-----------------
f2(
    3, 3
);



//console.log(`-----------------`);