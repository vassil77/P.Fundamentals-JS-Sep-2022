function f2(params) {
    for (let i = 0; i < params.length; i++) {
        let digits = (params[i] + "").split("");
        let reversedArray = digitReverse(digits);
        console.log(digits.join('') === reversedArray.join(''));
    }

    function digitReverse(original) {
        original = original.join('').split('');
        return original.reverse();
    }

}

//-----------------
f2(
    [123,323,421,121]
);



//console.log(`-----------------`);