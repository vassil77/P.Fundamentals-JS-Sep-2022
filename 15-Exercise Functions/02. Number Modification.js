function f2(params) {
    let result = params + "";
    result = result.split('');
    let sum = 0;

    for (let i = 0; i < result.length; i++) {
        result[i] = Number(result[i]);
        sum += result[i];
    }
    let average=sum/result.length;

    while (average <= 5) {
        result.push(9);
        sum+=9;
        average=sum/result.length;   
    }

    console.log(result.join(''));



    //console.log(result);
}

//-----------------
f2(
    5835
);



//console.log(`-----------------`);