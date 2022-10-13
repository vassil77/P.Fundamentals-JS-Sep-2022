function f2(params) {
    let target = params.shift();
    let n = params.length;


    for (let i = 0; i < n; i++) {
        let thickness = params.shift();
        console.log(`Processing chunk ${thickness} microns`);
        let operations = [];
        operations[0] = {
            type: "Cut",
            delta: -0.75 * thickness

        };
        operations[1] = {
            type: "Lap",
            delta: -0.20 * thickness
        };
        operations[2] = {
            type: "Grind",
            delta: -20
        };
        operations[3] = {
            type: "Etch",
            delta: -2
        };
        operations[4] = {
            type: "X-ray",
            delta: +1
        };

        operations.sort(function (a, b) {
            return a.delta - b.delta;
        });

        let indexOp = 0;

        while (thickness > target - 1 && indexOp <= 3) {
            if (thickness <= target) {
                break;
            }
            let times = 0;
            while (thickness >= -operations[indexOp].delta + target - 1 && thickness >= 1) {
                // console.log(operations[indexOp].delta);
                thickness += operations[indexOp].delta;
                switch (operations[indexOp].type) {
                    case 'Cut':
                        operations[indexOp].delta = -0.75 * thickness;
                        break;
                    case 'Lap':
                        operations[indexOp].delta = -0.20 * thickness;
                        break;
                }

                if (indexOp <= 3) {
                    switch (operations[indexOp + 1].type) {
                        case 'Cut':
                            operations[indexOp + 1].delta = -0.75 * thickness;
                            break;
                        case 'Lap':
                            operations[indexOp + 1].delta = -0.20 * thickness;
                            break;
                    }

                }

                //console.log(operations[indexOp].delta);

                times++;
            }
            if (times > 0) {

                console.log(`${operations[indexOp].type} x${times}`);
                console.log(`Transporting and washing`);
                thickness = Math.floor(thickness);
            }

            indexOp++;
            if (thickness <= target) {
                break;
            }
        }

        if (thickness < target) {
            thickness++;
            console.log(`X-ray x1`);
        }
        console.log(`Finished crystal ${thickness} microns`);
    }
}

//-----------------
f2(
    [1200, 1199]
);



//console.log(`-----------------`);