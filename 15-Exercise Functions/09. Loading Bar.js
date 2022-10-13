function f2(params) {
    let n = Number(params);
    let start = "";
    let end = "..........";
    
    for (let i = 1; i <= n; i += 10) {
        start += '%';
        end = end.split("");
        end.pop();
        //console.log(end); //test
        end = end.join("");
        //console.log(end); //test
    }

    if (n === 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    } else {
        console.log(`${n}% [${start}${end}]`);
        console.log(`Still loading...`);
    }
}

//-----------------
f2(
    100
);



//console.log(`-----------------`);