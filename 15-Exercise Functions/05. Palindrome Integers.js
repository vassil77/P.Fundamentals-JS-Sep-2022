function f2(params) {
    for (let i = 0; i < params.length; i++) {
        let digits = (params[i] + "").split("");
        let isPalindrome = true;
        for (let j = 0; j < digits.length / 2; j++) {
            if (digits[i] !== digits[digits.length - 1 - i]) {
                isPalindrome = false;
            }
        }
        console.log(isPalindrome);
    }
}

//-----------------
f2(
    [0,2,1236]
);



//console.log(`-----------------`);