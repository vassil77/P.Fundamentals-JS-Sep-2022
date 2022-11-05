function f2(params) {

    params = params.map(el => JSON.parse(el));

    params.forEach(el => el.sort((a, b) => b - a));

    let result = [];
    result.push(params[0]);

    for (let i = 1; i < params.length; i++) {
        let arr1 = params[i];
        let duplicate = false;

        for (let j = 0; j < result.length; j++) {
            let arr2 = result[j];

            if (arr1.toString() === arr2.toString()) {
                duplicate = true;
                break;
            }
        }

        if (!duplicate) {
            result.push(arr1);
        }
    }


    result.sort((a, b) => a.length - b.length);

    result.forEach(element => {
        console.log(`[${element.join(', ')}]`);
    });

}

//-----------------
f2(

    [
        "[1, 2, 4, 3, 5, 6, 9]"


    ]

);



//console.log(`-----------------`);