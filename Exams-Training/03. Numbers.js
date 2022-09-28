function f2(params) {
    let array = params.split(" ");
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i]);
        sum += array[i];
    }
    let average = sum / array.length;

    let result = [];
    let index = 0;
    for (let j = 0; j < array.length; j++) {

        if (array[j] > average) {
            result[index++] = array[j];
        }

    }

    result.sort(function (a, b) {
        return b - a;
    });
    let max=result.length-5;
    for (let k = 1; k <=max; k++) {
        result.pop();
    }

    if (result.length == 0) {
        console.log("No");
    } else {

        console.log(result.join(" "));
    }

}

//-----------------
f2(
    '5 2 3 4 -10 30 40 50 20 50 60 60 51'
);



//console.log(`-----------------`);