function f2(params) {
    let search = params.shift().split(' ');

    let searchObj = {};

    for (const iterator of search) {
        let count = 0;
        for (const el of params) {
            if (iterator === el) {
                count++;
            }
        }
        searchObj[iterator] = count;
    }

    let sorted = Object.entries(searchObj);
    sorted.sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }

    // for (const key in searchObj) {
    //    console.log(`${key} - ${searchObj[key]}`);
    // }


    //  console.log(...sorted);
}

//-----------------
f2(
    [
        'this sentence',
        'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
);



//console.log(`-----------------`);