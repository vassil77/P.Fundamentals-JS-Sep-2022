function f2(params) {
    let coordinates = params.pop().split(' ');

    let rows = params.length;
    let damageResults = 0;
    let buniesKilled = 0;
 
    for (let i = 0; i < rows; i++) {
        params[i] = params[i].split(' ').map(Number);
        //console.log(params[i]); //test
    }
     //console.log(`-------------------`);

    let columns = params[0].length;

    while (coordinates.length > 0) {
        let xy = coordinates.shift().split(',').map(Number);
        let bombBunny = params[xy[0]][xy[1]];

        if (bombBunny <= 0) {
          continue;
        }

        let bombRowStart = Math.max(xy[0] - 1, 0);
        let bombRowEnd = Math.min(xy[0] + 1, rows - 1);

        let bombColumnStart = Math.max(xy[1] - 1, 0);
        let bombColumnEnd = Math.min(xy[1] + 1, columns - 1);

        for (let i = bombRowStart; i <= bombRowEnd; i++) {
            for (let j = bombColumnStart; j <= bombColumnEnd; j++) {
                params[i][j] -= bombBunny;
                params[i][j] = Math.max(0, params[i][j]);
            }
        }
        //params[xy[0]][xy[1]] = 0;
        damageResults += bombBunny;
        buniesKilled++;
      //  for (let i = 0; i < rows; i++) {
      //      console.log(params[i]); //test
       //  }
       // console.log(`-------------------`);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (params[i][j] > 0) {
                damageResults += params[i][j];
                buniesKilled++;
            }
        }
    }
    console.log(damageResults);
    console.log(buniesKilled);

}

//-----------------
f2(
    [
        '5 10 15 20',
        '10 10 10 10',
        '10 15 10 10',
        '10 10 10 10',
        '3,3 2,2'
    ]
);



//console.log(`-----------------`);