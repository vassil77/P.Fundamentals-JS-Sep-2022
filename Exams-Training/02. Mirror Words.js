function f2(params) {
    let validCount = 0;
    let mirrorCount = 0;
    let mirror = [];
    let index = 0;
    let array1 = params[0].split("##");
    console.log(array1); //test
    for (let i = 0; i < (array1.length - array1.length % 2); i ++) {
        let leftArray = array1[i].split("#");
        let wordLeft = leftArray[leftArray.length - 1];

        let rightArray = array1[i + 1].split("#");
        let wordRight = rightArray[rightArray.length - 1];


        if (wordLeft.length >= 3 && wordRight.length >= 3) {
            if (onlyLetters(wordLeft) && onlyLetters(wordRight)) {
                validCount++;
                console.log(wordLeft); //test
                let reverse = wordRight.split().reverse().join();
                if (wordLeft === reverse) {
                    mirror[index++] = wordLeft + " <=> " + wordRight;
                    mirrorCount++;
                }
            }
        }

    }




    console.log(validCount);

    function onlyLetters(str) {
        return /^[a-zA-Z]+$/.test(str);
    }
}

//-----------------
f2(
    [
        '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]

);