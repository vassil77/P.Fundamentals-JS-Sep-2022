function f2(array, bomb) {
    let indexes = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === bomb[0]) {
            indexes.push(i);
        }
    }
    //console.log(indexes); //test
    let scopes = [];
    let start = 0;
    let end = array.length - 1;
    for (let i = 0; i < indexes.length; i++) {
        start = Math.max(0, indexes[i] - bomb[1]);
        end = Math.min(array.length - 1, indexes[i] + bomb[1]);
        scopes[i] = [start, end];

    }
    //for (let i = 0; i < scopes.length; i++) { //test
      //  console.log(scopes[i]);
   // }
    let restIndexes = [];
    let currentIndex = 0;
    currentScope = scopes.shift();
    scopesCounter = 0;
    while (currentIndex < array.length) {
        if (currentIndex < currentScope[0]) {
            restIndexes.push(currentIndex);
        } else {
            currentIndex = currentScope[1]; //jump [] here
            if (scopesCounter < indexes.length - 1) {
                currentScope = scopes.shift();
                scopesCounter++;
            } else {
                currentScope = [array.length, array.length];
            }
        }
        currentIndex++;
    }
    //console.log(restIndexes); //test
    let sum = 0;
    for (const iterator of restIndexes) {
        sum += array[iterator];
    }
    console.log(sum);
}

//-----------------
f2(
    [1, 4, 1, 1, 1, 1, 1, 4, 1], 
    [4, 2]
);



//console.log(`-----------------`);