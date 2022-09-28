function RightPlace(string1, char, string2) {

    let result = string1.replace("_", char);

    if (result === string2) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }

}

RightPlace(
    'Str_ng', 'i', 'String'
);



//console.log(`-----------------`);