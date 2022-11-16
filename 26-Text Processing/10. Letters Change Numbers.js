function f2(params) {
    let alphaLower = ' abcdefghijklmnopqrstuvwxyz';
    let array = params.split(' ');
    let sum = 0;
    // let arrayNoSpace = [];
    for (let el of array) {
        if (el !== '') {
            let elArr = el.split('');
            let letterBefore = elArr.shift();
            let letterAfter = elArr.pop();
            let currentNumber = Number(elArr.join(''));

            if (letterBefore === letterBefore.toUpperCase()) {
                currentNumber /=  alphaLower.indexOf(letterBefore.toLowerCase());
            } else {
                currentNumber *=  alphaLower.indexOf(letterBefore.toLowerCase());
            }


            if (letterAfter === letterAfter.toUpperCase()) {
                currentNumber -= alphaLower.indexOf(letterAfter.toLowerCase());
            } else {
                currentNumber += alphaLower.indexOf(letterAfter.toLowerCase());
            }
            sum += currentNumber;

        }
    }
    console.log(sum.toFixed(2));
}

//Judge__________________
f2(
    'P34562Z q2576f   H456z'
    );