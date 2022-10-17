function f2(params) {
    let result=[];
    for (let i = 0; i < params.length; i++) {
        let currentEl=params[i];
        if (!result.includes(currentEl)) {
            result.push(currentEl);
        } 
        
    }

    console.log(result.join(' '));

}

//-----------------
f2 (
    [20, 8, 12, 13, 4, 4, 8, 5]
    );



//console.log(`-----------------`);