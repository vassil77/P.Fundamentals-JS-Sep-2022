function f2(params) {
let n=Number(params);
let sum=0;
    for (let i = 1; i < n; i++) {
        if (n%i===0) {
            sum+=i;
        } 
    }
    //console.log(sum);//test
if (n===sum) {
    console.log("We have a perfect number!");
} else {
    console.log("It's not so perfect.");
}


}

//-----------------
f2 (
    1236498
    );



//console.log(`-----------------`);