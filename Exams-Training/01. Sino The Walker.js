function f2(params) {
    let [startHour, startMinute, startSecond] = params.shift().split(':');

    let d = new Date();
    d.setHours(startHour, startMinute, startSecond);
    let time = d.getTime() % (24 * 60 * 60 * 1000);

    let steps = Number(params.shift()) % (24 * 60 * 60);
    let secPerStep = Number(params.shift()) % (24 * 60 * 60);

    let arrivalTime = time + steps * secPerStep * 1000;
    let arrival = new Date(arrivalTime);

    let hours = arrival.getHours();
    let minutes = arrival.getMinutes();
    let seconds = arrival.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    console.log(`Time Arrival: ${hours}:${minutes}:${seconds}`);


    // console.log(arrivalTime);
}

//-----------------
f2(
    [
        '00:00:00',
        '3000',
        '1'
    ]
);