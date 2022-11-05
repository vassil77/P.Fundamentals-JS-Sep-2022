function f2(params) {
    params = params.map(el => el = el.split(' '));

    let result = [];

    // console.log(...params);
    for (let arrCandidate of params) {
        let duplicate = false;
        for (let j = 0; j < result.length; j++) {
            let arrIn = result[j];
            if (arrCandidate[0].toString() === arrIn[0].toString()) {
                duplicate = true;
                //arrIn=[];
                result[j] = arrCandidate.slice();

                //console.log(...result);
            }
        }
        if (!duplicate) {
            result.push(arrCandidate);
        }
    }



    result.forEach(element => {
        console.log(`${element[0]} -> ${element[1]}`);
    });
}

//-----------------
f2(
    ['George 0552554',
        'Peter 087587',
        'George 0453112',
        'Bill 0845344'
    ]
);



//console.log(`-----------------`);