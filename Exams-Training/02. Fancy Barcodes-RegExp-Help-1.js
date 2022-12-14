function fancyBarCode(input) {
    let numberBarCodes = Number(input.shift());
    let patternProducts = /(@#+)(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])(@#+)/g;
    // let patternProducts = /\@#+[A-Z][A-Za-z0-9]{4,}[A-Z]\@#+/g;
    let patternNumbers = /[0-9]/g;
    for (let i = 0; i < numberBarCodes; i++) {
        let line = input[i];
        let match = patternProducts.exec(line);
        if (match && match[0] === line) {
            // let productName = match.groups.product;
            let numberMatch = match[0].match(patternNumbers);
            if (numberMatch === null) {
                console.log(`Product group: 00`);
            } else {
                console.log(`Product group: ${numberMatch.join("")}`);
            }
        } else {
            console.log("Invalid barcode");
        }
        match = patternProducts.exec(line);
    }
}

fancyBarCode(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
]);