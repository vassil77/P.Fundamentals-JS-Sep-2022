function f2(array, commands) {

    let command = commands.shift();

    while (command !== 'print') {
        command = command.split(' ');
        switch (command[0]) {
            case 'add':
                command.shift();
                index = Number(command.shift());
                element = Number(command.shift());
                //console.log(index);//test
                //console.log(element);//test
                array.splice(index, 0, element);
                //console.log(`[ ${array.join(', ')} ]`);//test
                break;
            case 'addMany':
                command.shift();
                index = Number(command.shift());
                //console.log(index);//test
                //console.log(command);//test
                let end = command.length;
                for (let i = 0; i < end; i++) {
                    element = Number(command.pop());
                    array.splice(index, 0, Number(element));
                }
                //console.log(`[ ${array.join(', ')} ]`);//test
                break;
            case 'contains':
                command.shift();
                element = Number(command.shift());
                //console.log(element);//test
                console.log(array.indexOf(element));
                //console.log(array);//test
                //console.log(`[ ${array.join(', ')} ]`);//test
                break;
            case 'remove':
                command.shift();
                index = Number(command.shift());
                // console.log(index);//test
                array.splice(index, 1);
                //console.log(`[ ${array.join(', ')} ]`);//test
                break;
            case 'shift':
                command.shift();
                positions = command.shift();
                for (let i = 0; i < positions; i++) {
                    buffer = array.shift();
                    array.push(buffer);
                }
                //console.log(`[ ${array.join(', ')} ]`);//test
                break;
            case 'sumPairs':

                buffer2 = [];
                for (let i = 0; i < array.length; i += 2) {
                    if (i+1<array.length) {
                        buffer2.push(Number(array[i]) + Number(array[i + 1]));
                        
                    } else {
                        buffer2.push(Number(array[i]));
                    }
                }
                array = buffer2;
                //console.log(`[ ${buffer2.join(', ')} ]`);//test
                break;
        }
        //console.log(`[ ${array.join(', ')} ]`);//test

        command = commands.shift();
    }

    console.log(`[ ${array.join(', ')} ]`);

}

//-----------------
f2(
    [1, 2, 4, 5, 6, 7, 8],
    ['add 0 5','addMany 3 5 9 8','contains 5', 'remove 4', 'shift 5','sumPairs', 'print']
        );



//console.log(`-----------------`);