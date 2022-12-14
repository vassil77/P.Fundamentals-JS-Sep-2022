function f2(input) {
    let n = Number(input.shift());
    let pattern = /\@#+[A-Z][A-Za-z0-9]{4,}[A-Z]\@#+/g;
    for (let i = 0; i < n; i++) {
        let barcode = input.shift();
        let valid = barcode.match(pattern);
        if (valid === null) {
            console.log(`Invalid barcode`);
        } else {
            let group = barcode.match(/[0-9]/g);
            if (group === null) {
                console.log(`Product group: 00`);
            } else {
                console.log(`Product group: ${group.join("")}`);
            }
        }
    }
}

//-----------------
f2
(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])

;