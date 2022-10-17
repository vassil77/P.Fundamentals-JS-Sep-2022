function f2(params) {
    let wagons = params.shift().split(' ').map(Number);
  
    let capacity = Number(params.shift());
    const n = params.length;
    

    for (let i = 0; i < n; i++) {
        command=params.shift().split(" ");
        //console.log(command);//test
        switch (command[0]) {
            case 'Add':
                wagons.push(command[1]);
                break;

            default:
            let passengers=Number(command[0]);
            for (let k = 0; k < wagons.length; k++) {
                if (wagons[k]+passengers<=capacity) {
                    wagons[k]=wagons[k]+passengers;
                    break;
                } 
            }
                break;
        }
        
    }



    console.log(wagons.join(' '));
}

//-----------------
f2(
    ['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
);



//console.log(`-----------------`);