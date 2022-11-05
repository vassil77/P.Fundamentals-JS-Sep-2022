function f2([list, changed, check]) {

    // console.log(list);
    class Flight {
        constructor(flightNumber, destination) {
            this.flightNumber = flightNumber;
            this.destination = destination;
        }
    }

    //let n = list.length;
    let listFlights = [];
    for (let elem of list) {

        let flightNumber = elem.split(' ').shift();
        elem = elem.split(' ');
        elem.shift();
        let destination = elem.join(' ');
       
        let currentFlight = new Flight(flightNumber, destination);
        listFlights.push(currentFlight);
    }

    for (let  elem of changed) {
        let flightNumber = elem.split(' ').shift();
        elem = elem.split(' ');
        elem.shift();
        let newStatus = elem.join(' ');
        //console.log(flightNumber);

        for (let iterator of listFlights) {
            if (iterator.flightNumber===flightNumber) {
                iterator.status=newStatus;
            }
        }
    }

    for (let element of listFlights) {
        if (element.status===undefined) {
            element.status='Ready to fly';
        }
    }

    for (const i of listFlights) {
        if (i.status===check[0]) {
            console.log(`{ Destination: '${i.destination}', Status: '${i.status}' }`);
        }
    }


    //console.log(...listFlights);
}

//-----------------
f2(
    [['WN269 Delaware',
    'FL2269 Oregon',
     'WN498 Las Vegas',
     'WN3145 Ohio',
     'WN612 Alabama',
     'WN4010 New York',
     'WN1173 California',
     'DL2120 Texas',
     'KL5744 Illinois',
     'WN678 Pennsylvania'],
     ['DL2120 Cancelled',
     'WN612 Cancelled',
     'WN1173 Cancelled',
     'SK330 Cancelled'],
     ['Ready to fly']
 ]
 );



//console.log(`-----------------`);