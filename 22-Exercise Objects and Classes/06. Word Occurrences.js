function f2(params) {
    let map = new Map();

    for (let mainWord of params) {
        let count = 0;
        for (let word of params) {
            if (word === mainWord) {
                count++;
            }
        }
        map.set(mainWord, count);
    }

    let sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
    for (let kvp of sorted) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }





}

//-----------------
f2(
    ["dog", "bye", "city", "dog", "dad", "boys", "ginger"]
);



//console.log(`-----------------`);