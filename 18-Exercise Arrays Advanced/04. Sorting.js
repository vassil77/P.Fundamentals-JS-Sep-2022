function f2(params) {
    if (params.length === 1) {
        console.log(params[0]);
    } else {
        params.sort((a, b) => b - a);
        let middle = Math.ceil(params.length / 2);
        let left = params.slice(0, middle);
        let right = params.slice(middle);
        right.reverse();
        let result = [];
        for (let i = 0; i < Math.max(left.length, right.length); i++) {
            if (left[i] !== undefined) {
                result.push(left[i]);
            }
            if (right[i]!==undefined) {
                
                result.push(right[i]);
            }
        }
        //console.log(left); //test
        //console.log(right); //test
        //console.log(result);
        console.log(result.join(' '));
    }
}

//-----------------
f2(
    [34, 10, 100]
);



//console.log(`-----------------`);