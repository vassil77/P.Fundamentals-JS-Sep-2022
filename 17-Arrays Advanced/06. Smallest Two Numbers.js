function f2(params) {
    params.sort((a,b)=>a-b);
    console.log(params.slice(0,2).join(' '));



}

//-----------------
f2 (
    [3, 0, 10, 4, 7, 3]
    );



//console.log(`-----------------`);