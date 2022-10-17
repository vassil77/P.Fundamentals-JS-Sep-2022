function f2(array, bomb) {
let target=bomb[0];
    function singleBomb(array, bomb) {

        for (let i = 0; i < array.length; i++) {
            let [target, power] = bomb;
            let currentNum = array[i];

            if (currentNum === target) {
                let startIndex = Math.max(0, i - power); //math.max in cases where index is -1(outside the array)
                let endIndex = Math.min(i + power, array.length);
                let lengthToCut = endIndex - startIndex + 1;

                array.splice(startIndex, lengthToCut);
                //console.log(array);
                return array;
            }
        }
        //console.log(array);
        return array;

    }
    while (array.includes(target)) {
        singleBomb(array, bomb);
    }

    let sum=0;
    
    for (const iterator of array) {
        sum+=iterator;
    }
    
    console.log(sum);


}
//-----------------
f2(
    [1, 2, 2, 4, 2, 2, 2, 9],
[4, 2]
);



//console.log(`-----------------`);