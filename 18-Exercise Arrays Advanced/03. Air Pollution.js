function f2(map, forces) {

    map = map.map(str => str.split(' ').map(Number));
    forces = forces.map(str => str.split(' ')).map(([a, b]) => {
        return [a, Number(b)];
    });

    for (let i = 0; i < forces.length; i++) {
        switch (forces[i][0]) {
            case 'breeze':
                index = forces[i][1];
                for (let j = 0; j < map.length; j++) {
                    map[index][j] -= 15;
                    map[index][j] = Math.max(0, map[index][j]);
                }
                break;


            case 'gale':
                index = forces[i][1];
                for (let j = 0; j < map.length; j++) {
                    map[j][index] -= 20;
                    map[j][index] = Math.max(0, map[j][index]);
                }
                break;


            case 'smog':
                value = forces[i][1];
                for (let k = 0; k < map.length; k++) {
                    for (let l = 0; l < map.length; l++) {
                        map[k][l]+=value;
                    } 
                }
                break;


        }



    }
let result=[];
    for (let k = 0; k < map.length; k++) {
        for (let l = 0; l < map.length; l++) {
            if (map[k][l]>=50) {
                result.push(`[${k}-${l}]`);
            }
            
        } 
    }

if (result.length>0) {
    console.log(`Polluted areas: ${result.join(', ')}`);
} else {
    console.log(`No polluted areas`);
}
    
}

//-----------------
f2(
    ['5 7 2 14 4',
    '21 14 2 5 3',
    '3 16 7 42 12',
    '2 20 8 39 14',
    '7 34 1 10 24'],
    ['breeze 1', 'gale 2', 'smog 35']
    );



//console.log(`-----------------`);