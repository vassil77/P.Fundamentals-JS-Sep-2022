function f2(params) {
    let efficiency = Number(params[0]) + Number(params[1]) + Number(params[2]);
    let students = params[3];

    
    let hours = Math.ceil(students / efficiency + Math.floor(students / efficiency / 3));

    if ((students / efficiency) % 3 === 0) {
        hours--;
    }
    console.log(`Time needed: ${hours}h.`);
}

//-----------------
f2(
    ['1', '1', '1', '4']
);



//console.log(`-----------------`);