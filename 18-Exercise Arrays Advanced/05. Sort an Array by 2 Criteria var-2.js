function f2(params) {

    params.sort((a, b) => a.length - b.length || a.localeCompare(b));

    //params.sort((a, b) => a.localeCompare(b));

    console.log(params.join('\n'));
}

//-----------------
f2(
    ['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']
);



//console.log(`-----------------`);