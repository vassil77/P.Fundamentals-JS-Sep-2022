function f2(params) {
    let input =params;
    let studentsNum=Number(input.shift());
    let lecturesNum=Number(input.shift());
    let addBonus=Number(input.shift());

    let maxBonus=0;
    let respAttendacies=0;

    for (let i = 0; i < studentsNum; i++) {
       let currentAttendence=Number(input.shift());
       let totalBonus=currentAttendence/lecturesNum*(5+addBonus);
       if (totalBonus>=maxBonus) {
        maxBonus=totalBonus;
        respAttendacies=currentAttendence;
       }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${Math.ceil(respAttendacies)} lectures.`);

}

//-----------------
f2(
    [
        '10', '30', '14', '8',
        '23', '27', '28', '15',
        '17', '25', '26', '5',
        '18'
      ]
);