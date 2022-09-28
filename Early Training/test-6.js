function solution(input) {
    let string = input[0]; //input.shift()
    let items = [];
    let pattern = /([|#])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let totalCal = 0;

    let regex = pattern.exec(string);
    console.log(regex);
    console.log(regex[2]);
    console.log(regex[3]);
    console.log(regex[4]);

    regex = pattern.exec(string);
    console.log(regex);
    console.log(regex[2]);
    console.log(regex[3]);
    console.log(regex[4]);

    regex = pattern.exec(string);
    console.log(regex);
    console.log(regex[2]);
    console.log(regex[3]);
    console.log(regex[4]);

}





solution

    (

        [
            '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
        ]


    )





;




//console.log(`-----------------`);