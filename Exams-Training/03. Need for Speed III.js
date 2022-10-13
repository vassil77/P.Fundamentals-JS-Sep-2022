function f2(params) {
    let input = params;
    let n = Number(input.shift());
    let carList = [];
    for (let i = 0; i < n; i++) {
        car = input.shift();
        car = car.split("|");
        carList[i] = {
            car: car[0],
            km: Number(car[1]),
            fuel: Number(car[2])
        };
        //console.log(carList[i]); //test
    }

    let command = input.shift();


    while (command !== "Stop") {
        command = command.split(" : ");
        let index;
        switch (command[0]) {
            case "Drive":
                command.shift();
                const drive = {};
                drive.car = command.shift();
                drive.km = Number(command.shift());
                drive.fuel = Number(command.shift());
                //console.log(drive); //test

                for (let k = 0; k < n; k++) {
                    if (carList[k].car === drive.car) {
                        index = k;
                    }
                }

                if (carList[index].fuel < drive.fuel) {
                    console.log(`Not enough fuel to make that ride`);
                } else {
                    carList[index].km += drive.km;
                    carList[index].fuel -= drive.fuel;
                    console.log(`${carList[index].car} driven for ${drive.km} kilometers. ${drive.fuel} liters of fuel consumed.`);
                    if (carList[index].km >= 100000) {
                        console.log(`Time to sell the ${carList[index].car}!`);
                        carList.splice(index, 1);
                        n--;
                    }
                }
                break;

            case "Refuel":
                command.shift();
                const refuel = {};
                refuel.car = command.shift();
                refuel.fuel = Number(command.shift());
                //console.log(refuel); //test
                //console.log(carList); //test
                for (let k = 0; k < n; k++) {
                    if (carList[k].car === refuel.car) {
                        index = k;
                    }
                }

                let deltaFuel = Math.min(75 - carList[index].fuel, refuel.fuel);
                carList[index].fuel += deltaFuel;
                console.log(`${carList[index].car} refueled with ${deltaFuel} liters`);
                break;

            case "Revert":
                command.shift();
                const revert = {};
                revert.car = command.shift();
                revert.km = Number(command.shift());
                //console.log(revert); //test

                for (let k = 0; k < n; k++) {
                    if (carList[k].car === revert.car) {
                        index = k;
                    }
                }

                carList[index].km -= revert.km;

                if (carList[index].km < 10000) {
                    carList[index].km = 10000;
                } else {
                    console.log(`${carList[index].car} mileage decreased by ${revert.km} kilometers`);
                }
                break;
        }

        command = input.shift();
    }

    for (let j = 0; j < n; j++) {
        console.log(`${carList[j].car} -> Mileage: ${carList[j].km} kms, Fuel in the tank: ${carList[j].fuel} lt.`);
    }

}

//-----------------
f2(
    [
        '4',
        'Lamborghini Veneno|11111|74',
        'Bugatti Veyron|12345|67',
        'Koenigsegg CCXR|67890|12',
        'Aston Martin Valkryie|99900|50',
        'Drive : Koenigsegg CCXR : 382 : 82',
        'Drive : Aston Martin Valkryie : 99 : 23',
        'Drive : Aston Martin Valkryie : 2 : 1',
        'Refuel : Lamborghini Veneno : 40',
        'Revert : Bugatti Veyron : 2000',
        'Stop'
    ]
);