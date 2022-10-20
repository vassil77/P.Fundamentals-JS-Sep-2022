function f2(params) {

    let k=params.shift();
    let first=params.slice(0,k);
    let last=params.slice(-k);

    
    console.log(first.join(' '));

    
    console.log(last.join(' '));



}

//-----------------
f2(
    [3,
        6, 7, 8, 9]
);



//console.log(`-----------------`);