function SortNumbers(params) {
    let min = Number(params[0]);
    for (let k = 0; k < params.length; k++) {
        
        if (params[k] <= min) {
            min = params[k];
        }
    }


    for (let i = 0; i < params.length; i++) {
        let max = Number(params[0]);
        jmax = 0;
        for (let j = 0; j < params.length; j++) {
            if (params[j] >= max) {
                max = params[j];
                jmax = j;

            }
        }
        console.log(max);
        params[jmax] = min;

    }




}

SortNumbers([
    2,1,3
]);



//console.log(`-----------------`);