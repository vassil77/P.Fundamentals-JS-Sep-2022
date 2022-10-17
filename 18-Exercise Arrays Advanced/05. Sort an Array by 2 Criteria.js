function f2(params) {

    params.sort((a, b) => {
        if ((a.length - b.length) !== 0) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }

    });

    //params.sort((a, b) => a.localeCompare(b));



    console.log(params.join('\n'));
}

//-----------------
f2(
    ['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']
);



//console.log(`-----------------`);