function f2(params) {
    let indexP = 0;
    n = Number(params[indexP]);
    indexP += n + 1;
    let array = [];
    let indexArr = 0;

    for (let i = 0; i < n; i++) {
        array[i] = params[i + 1].split("|");
        indexArr = i + 1;
    }

    let command = params[indexP].split("|");
    indexP++;



    while (command !== "Stop") {
        let isIn;
        switch (command[0]) {
            case "Add":
                isIn=false;
                for (let i = 0; i < indexArr; i++) {
                    if (command[1] === array[i][0]) {
                        console.log(`${command[1]} is already in the collection!`);
                        isIn = true;
                    } 
                }

                if (!isIn) {
                    array[indexArr] = command;
                    array[indexArr].shift();
                    console.log(`${array[indexArr][0]} by ${array[indexArr][1]} in ${array[indexArr][2]} added to the collection!`);
                    indexArr++;
                }
                break;

            case "Remove":
                isIn=false;
                for (let i = 0; i < indexArr; i++) {
                    if (command[1] === array[i][0]) {
                        for (let j = i; j < indexArr; j++) {
                            array[j]=array[j+1];
                        }
                        array.pop();
                        indexArr--;
                        console.log(`Successfully removed ${command[1]}!`);
                        isIn = true;
                    } 
                }

                if (!isIn) {
                    
                    console.log(`Invalid operation! ${command[1]} does not exist in the collection.`);
                    
                }
                break;

            case "ChangeKey":
                isIn=false;
                for (let i = 0; i < indexArr; i++) {
                    if (command[1] === array[i][0]) {
                        array[i][2]=command[2];
                        console.log(`Changed the key of ${command[1]} to ${command[2]}!`);
                        isIn = true;
                    } 
                }

                if (!isIn) {
                    
                    console.log(`Invalid operation! ${command[1]} does not exist in the collection.`);
                    
                }

                break;

            default:
                break;
        }




        if ((typeof params[indexP]) === "string") {
            command = params[indexP].split("|");
            indexP++;
        } else {
            break;
        }

    }

    for (let i = 0; i <=indexArr - 1; i++) {
        console.log(`${array[i][0]} -> Composer: ${array[i][1]}, Key: ${array[i][2]}`);
    }


}


//-----------------

f2(

    [4,
'Eine kleine Nachtmusik|Mozart|G Major',
'La Campanella|Liszt|G# Minor',
'The Marriage of Figaro|Mozart|G Major',
'Hungarian Dance No.5|Brahms|G Minor',
'Add|Spring|Vivaldi|E Major',
'Remove|The Marriage of Figaro',
'Remove|Turkish March',
'ChangeKey|Spring|C Major',
'Add|Nocturne|Chopin|C# Minor',
'Stop']

);


//console.log(`-----------------`);