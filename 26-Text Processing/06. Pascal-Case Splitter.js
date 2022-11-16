function f2(string) {
    let stringLow = string.toLowerCase().split('');
    string = string.split('');
    // console.log(stringLow);
    let result = [];
    let index = 0;
    let currentWordArr = [];
    currentWordArr[0] = string[0];

    for (let i = 1; i < string.length; i++) {

        if (string[i] === stringLow[i]) {
            currentWordArr.push(string[i]);

        } else {
            result[index++] = currentWordArr.join('');
            currentWordArr = [];
            currentWordArr.push(string[i]);
        }

    }
    result[index++] = currentWordArr.join('');

    console.log(result.join(', '));
}

//Judge__________________
f2(
    'ThisIsSoAnnoyingToDo'
        );