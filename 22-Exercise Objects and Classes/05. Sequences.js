function f2(params) {
    params = params.map(el => JSON.parse(el));
    params.forEach(el => el.sort((a, b) => b - a));
    let result=[];

    for (let arr1Candidate of params) {
        let duplicate = false;
        for (let arr2In of result) {
            if (arr1Candidate.toString() === arr2In.toString()) {
                duplicate = true;
            }
        }
        if (!duplicate) {
            result.push(arr1Candidate);
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
        '[-3, -2, -1, 0, 1, 2, 3, 4]',
        '[-3, -2, -1, 9, 9, 9, 3, 4]',
        '[-3, -2, -1, 0, 1, 2, 3, 4]'


    ]

);



//console.log(`-----------------`);