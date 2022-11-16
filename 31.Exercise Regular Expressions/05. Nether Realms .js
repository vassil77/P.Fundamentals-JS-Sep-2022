function f2(params) {
    let patternDemons = /([^, ]+)/g;
    let demons = params.match(patternDemons);
    if (demons !== null) {
        demons.sort((a, b) => a.localeCompare(b));
        // let listDemons={};
        for (const demon of demons) {
            let patternCharacters = /([^0-9+\-*/.])/g;
            let demonArr = demon.match(patternCharacters);
            let health = 0;
            if (demonArr !== null) {
                for (const char of demonArr) {
                    health += char.charCodeAt();
                }
            }
            let patternNums = /([+-]*([0-9]+[.]{1})*[0-9]+)/g;
            let demonArr2 = demon.match(patternNums);
            let damage = 0;
            if (demonArr2 !== null) {
                for (const digit of demonArr2) {
                    damage += Number(digit);
                }
                let patternOperations = /([*/]{1})/g;
                let operationsArr = demon.match(patternOperations);
                // console.log(operationsArr);
                if (operationsArr !== null) {
                    for (const operator of operationsArr) {
                        switch (operator) {
                            case '*':
                                damage *= 2;
                                break;
                            case '/':
                                damage /= 2;
                                break;
                        }
                    }
                }
            }
            console.log(`${demon} - ${health} health, ${damage.toFixed(2)} damage`);
        }
    }
}

//Judge__________________
f2(
    'c,A3'
);