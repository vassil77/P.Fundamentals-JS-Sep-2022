function f2(params) {
    let n = Number(params.shift());
    let houseArr = params.shift().split(' ').map(Number);
    let indexSanta = 0;
    for (let i = 1; i <= n; i++) {
        let line = params.shift().split(' ');
        let command = line.shift();
        let steps;
        switch (command) {
            case 'Forward':
                steps = Number(line.shift());
                if (indexSanta + steps < houseArr.length) {
                    indexSanta += steps;
                    houseArr.splice(indexSanta, 1);
                }
                break;

            case 'Back':
                steps = Number(line.shift());
                if (indexSanta - steps >= 0) {
                    indexSanta -= steps;
                    houseArr.splice(indexSanta, 1);
                }
                break;

            case 'Gift':
                let index = Number(line.shift());
                let newHouse = Number(line.shift());
                // console.log(houseArr);//test
                if (index >= 0 && index <= houseArr.length) {
                    houseArr.splice(index, 0, newHouse);
                    // console.log(houseArr);//test
                    indexSanta = index;
                }
                break;

            case 'Swap':
                let house1 = Number(line.shift());
                let house2 = Number(line.shift());
                let index1 = houseArr.indexOf(house1);
                let index2 = houseArr.indexOf(house2);
                // console.log(houseArr);
                if (index1 >= 0 && index2 >= 0) {
                    houseArr[index1] = house2;
                    houseArr[index2] = house1;
                }
                // console.log(houseArr);
                break;
        }
    }
    console.log(`Position: ${indexSanta}`);
    console.log(houseArr.join(', '));
}

// JUDGE
f2([
    6,
    '50 40 25 63 78 54 66 77 24 87',
    'Forward 4',
    'Back 3',
    'Forward 3',
    'Gift 2 88',
    'Swap 50 87',
    'Forward 1'
]);