function f2(old, ordered) {

    let storeList = {};
    for (let i = 0; i < old.length; i += 2) {
        storeList[old[i]] = Number(old[i + 1]);
    }
    // console.log(storeList); //test

    for (let i = 0; i < ordered.length; i += 2) {
        let newKey = ordered[i];
        let newValue = Number(ordered[i + 1]);
        let isAlreadyIn = false;


        for (let [key, value] of Object.entries(storeList)) {
            value = Number(value);
            if (newKey === key) {
                storeList[key] += newValue;
                isAlreadyIn = true;
                break;
            }
        }

        if (!isAlreadyIn) {
            storeList[newKey] = newValue;
        }

    }




    for (let [key, value] of Object.entries(storeList)) {
        console.log(`${key} -> ${value}`);
    }

}

//-----------------
f2(
    [
        'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
        ],
        [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
        ]
        );



//console.log(`-----------------`);