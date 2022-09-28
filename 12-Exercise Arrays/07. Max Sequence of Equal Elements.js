function f2(a) {
    let index = 0;
    let seq0 = [];
    let seq1 = [];


    seq0[index] = a[0] + "";
    seq1[index] = 1;
    let match = a[0];

    for (let i = 1; i < a.length; i++) {
        if (a[i] === match) {
            seq0[index] += (" " + a[i]);
            seq1[index] += 1;
        } else {
            index++;
            seq0[index] = a[i] + "";
            seq1[index] = 1;
            match = a[i];

        }

    }



    let iLongest = 0;
    let Longest = seq1[0];

    for (let j = 0; j < seq1.length; j++) {
        if (seq1[j] > Longest) {
            Longest = seq1[j];
            iLongest = j;
        }

    }
    console.log(seq0[iLongest]);

}

//-----------------
f2(
    [0, 1, 1, 5, 2, 2, 6, 3, 3]
);



//console.log(`-----------------`);