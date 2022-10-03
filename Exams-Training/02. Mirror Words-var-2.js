function f2(params) {
    let validCount = 0;
    let pattern = /\#{1}[A-z]{3,}\#{2}[A-z]{3,}\#{1}|\@{1}[A-z]{3,}\@{2}[A-z]{3,}\@{1}/g;
    let valid = params[0].match(pattern);
    if (valid != null) {
         validCount = valid.length;
    }

    let mirror = [];
    let mirrorCount = 0;
    let index = 0;

    for (let i = 0; i < validCount; i++) {
        if (valid[i][0] === "#") {
            wordLeft = valid[i].split("#")[1];
            wordRight = valid[i].split("#")[3];

            let reverse = wordRight.split("").reverse().join("");
            //console.log(wordLeft, wordRight,reverse); //test
            if (wordLeft === reverse) {
                mirror[index++] = wordLeft + " <=> " + wordRight;
                mirrorCount++;
            }

        } else if (valid[i][0] === "@") {
            wordLeft = valid[i].split("@")[1];
            wordRight = valid[i].split("@")[3];
            //console.log(wordLeft, wordRight); //test
            let reverse = wordRight.split("").reverse().join("");
            if (wordLeft === reverse) {
                mirror[index++] = wordLeft + " <=> " + wordRight;
                mirrorCount++;
            }

        }
    }

    if (validCount === 0) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${validCount} word pairs found!`);
    }

    if (mirrorCount === 0) {
        console.log(`No mirror words!`);
    } else {
        console.log(`The mirror words are:`);
        console.log(`${mirror.join(", ")}`);
    }


    //console.log(valid);
}

//-----------------
f2(
    [
        '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
        ]
        

);