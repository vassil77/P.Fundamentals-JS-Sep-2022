function f2(params) {
    let text = params.shift();

    let regex = /(?<=^|[\s\/\\()])(?<username>[A-Za-z][A-Za-z0-9_]{2,24})(?=([\s\/\\()]|$))/g;
    // let regex=/([A-Za-z0-9_]{2,24})(?=[\s\\/()])/g;
    let longestCouple = {
        user1: "",
        user2: "",
        sum: 0
    };

    let matches = text.match(regex);


    // console.log(matches.length); //test

    for (let i = 0; i < matches.length - 1; i++) {
        let sum = matches[i].length + matches[i + 1].length;
        if (sum > longestCouple.sum) {
            longestCouple.user1 = matches[i];
            longestCouple.user2 = matches[i + 1];
            longestCouple.sum = sum;
        }
        // console.log(i);
    }

    console.log(longestCouple.user1);
    console.log(longestCouple.user2);


}

// JUDGE
f2([

        // 'ds3bhj y1ter/wfsdg 1nh_jgf ds2c_vbg\\4htref'
        // 'min23/ace hahah21 (    sasa  )  att3454/a/a2/abc'
        'chico/ gosho \ sapunerka (3sas) mazut  lelQ_Van4e'


    ]

);