function f2(array) {
    array = 0 + array + 0;
    //console.log(array);
    let destination1 = array.split("=");
    let index = 0;
    let validDest = [];
    //console.log(destination1); //test print
    for (let i = 0; i < destination1.length; i++) {
        // console.log(destination1[i].charCodeAt());
        if (destination1[i].charCodeAt() >= 65 && destination1[i].charCodeAt() <= 90 && destination1[i].length >= 3) {
            let isValid = true;
            for (let j = 1; j < destination1[i].length; j++) {
                if (destination1[i].charCodeAt(j) < 65 || destination1[i].charCodeAt(j) > 122 || (destination1[i].charCodeAt(j) > 90 && destination1[i].charCodeAt(j) < 97)) {
                    isValid = false;
                }
            }
            if (isValid) {
                validDest[index++] = destination1[i];
            }
        }
    }

    let destination2 = array.split("/");
    //console.log(destination2); //test print 2
    for (let i = 0; i < destination2.length; i++) {
        if (destination2[i].charCodeAt() >= 65 && destination2[i].charCodeAt() <= 90 && destination2[i].length >= 3) {
            let isValid = true;
            for (let j = 1; j < destination2[i].length; j++) {
                if (destination2[i].charCodeAt(j) < 65 || destination2[i].charCodeAt(j) > 122 || (destination2[i].charCodeAt(j) > 90 && destination2[i].charCodeAt(j) < 97)) {
                    isValid = false;
                }
            }
            if (isValid) {
                validDest[index++] = destination2[i];
            }
        }
    }

    let points = 0;
    for (let k = 0; k < validDest.length; k++) {
        points += validDest[k].length;
    }
    validDest = validDest.join(", ");
    console.log(`Destinations: ${validDest}`);
    console.log(`Travel Points: ${points}`);


}

//-----------------
f2
    ("=Hawai=/Cyprus\a\wai/=Invalid/invalid==i5valid=/I5valid/=i=")
    //("/=Abc=")

;