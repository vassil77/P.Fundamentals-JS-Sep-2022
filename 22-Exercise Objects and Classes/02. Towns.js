function f2(params) {
    class Town {
        constructor(town, a, b) {
            this.town = town;
            this.latitude = a;
            this.longitude = b;
        }
    }
    let list = [];
    for (let i = 0; i < params.length; i++) {
        let [town, latitude, longitude] = params[i].split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        let currentTown = new Town(town, latitude, longitude);
        list.push(currentTown);
    }

    for (const elem of list) {
        console.log(`{ town: '${elem.town}', latitude: '${elem.latitude}', longitude: '${elem.longitude}' }`);
    }



}

//-----------------
f2(
    [
        'Sofia | 42.696552 | 23.32601',
        'Beijing | 39.913818 | 116.363625'
    ]

);



//console.log(`-----------------`);