function TheLift(params) {

    let i = 0;
    let waiting = Number(params[i++]);
    let liftState = params[i++];
    let finalState = "";
    let currentState = 0;

    for (let j = 0; j < liftState.length; j += 2) { //Wagon by Wagon

        currentState = Number(liftState[j]);

        if (waiting > 0) {

            for (let k = Number(liftState[j]) + 1; k <= 4; k++) { // curent Wagon
                waiting--;
                currentState++;
                if (waiting <= 0) {

                    break;
                }
            } // curent Wagon

        }
        finalState += currentState + " ";
    }

    if (waiting <= 0 && currentState < 4) {
        console.log(`The lift has empty spots!`);
    }

    if (waiting > 0 && currentState === 4) {
        console.log(`There isn't enough space! ${waiting} people in a queue!`);
    }


    console.log(finalState);
}

TheLift

    ([
        "20",
        "0 2 0"
    ])


;



//console.log(`-----------------`);