function f2(string) {

    let array = string.split('');
    // console.log(array);
    let result=[];
     result[0] = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] !== array[i - 1]) {
            result.push(array[i]);
        }

    }

    console.log(result.join(''));
}

//Judge__________________
f2(
    'qqqwerqwecccwd'
    );