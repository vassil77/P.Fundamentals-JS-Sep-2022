function NextDay(year, month, day) {

    let oldDay = new Date(year, month-1, day);

    let nextDay= new Date();
    nextDay.setTime(oldDay.getTime()+24*60*60*1000);

    let output=nextDay.getFullYear()+"-"+(Number(nextDay.getMonth())+1)+"-"+nextDay.getDate();

    console.log(output);
   


}

NextDay(
    2020, 3, 24
    );



//console.log(`-----------------`);