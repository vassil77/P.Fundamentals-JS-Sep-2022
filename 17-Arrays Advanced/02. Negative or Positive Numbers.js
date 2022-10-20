function f2(params) {
    let result=[];
    for (let i = 0; i < params.length; i++) {
        if (Number(params[i])<0) {
            result.unshift(Number(params[i]));
        }else{
            result.push(Number(params[i]));
        }
    }

   console.log(result.join('\n'));

}

//-----------------
f2 (
    ['3', '-2', '0', '-1']
    );



//console.log(`-----------------`);