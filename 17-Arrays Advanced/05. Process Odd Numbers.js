function f2(params) {

    let result = params.filter((a, i) => i % 2 === 1).map(x => 2 * x).reverse();
    console.log(result.join(' '));



}

//-----------------

f2(
    [3, 0, 10, 4, 7, 3]
);



//console.log(`-----------------`);