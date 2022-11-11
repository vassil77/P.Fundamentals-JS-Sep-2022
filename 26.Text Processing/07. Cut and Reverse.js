function f2(params) {

    params = params.split('');
    let result = [];
    let n=params.length;
    for (let i = 0; i < n / 2; i++) {
        result.unshift(params[i]);
    }
    console.log(result.join(''));

     result = [];
    
    for (let i = n/2; i < n ; i++) {
        result.unshift(params[i]);
    }
    console.log(result.join(''));



}

//Judge__________________
f2(
    'sihToDtnaCuoYteBIboJsihTtAdooGoSmI');