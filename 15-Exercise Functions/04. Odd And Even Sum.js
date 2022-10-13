function f2(params) {
    let input=params+"";
    
    let array = input.split("");
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < array.length; i++) {
        if (Number(array[i])%2===0) {
            evenSum+=Number(array[i]);
        } else {
            oddSum+=Number(array[i]);
        }
        
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);




}

//-----------------
f2(
    3495892137259234
);



//console.log(`-----------------`);