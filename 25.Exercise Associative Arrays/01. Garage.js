function f2(params) {
    let garage = [];

    for (let line of params) {
        let [garageNumber, carFeatures] = line.split(' - ');
        garageNumber = Number(garageNumber);
        carFeatures = carFeatures.split(': ').join(' - ');

        if (!garage[garageNumber]) {
            garage[garageNumber] = [];
        }
        garage[garageNumber].push(carFeatures);
    }

    for (let i = 0; i < garage.length; i++) {
        if (garage[i]) {
            console.log(`Garage № ${i}`);

            for (const car of garage[i]) {
                console.log(`--- ${car}`);
            }

        }


    }

}

//-----------------
f2(
    ['1 - color: green, fuel type: petrol',
'1 - color: dark red, manufacture: WV',
'2 - fuel type: diesel',
'3 - color: dark blue, fuel type: petrol']
);



//console.log(`-----------------`);