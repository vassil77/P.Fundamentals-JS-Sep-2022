function f2(params) {
    let result = [];
    let isOver = false;
    while (params.length > 0) {
        let current = params.shift();

        if (Number.isFinite(current)) {
            result.push(Number(current));
        } else if (result.length < 2) {
            console.log(`Error: not enough operands!`);
            isOver = true;
        } else {
            let secondOperand = result.pop();
            let firstOperand = result.pop();

            switch (current) {
                case '+':
                    result.push(firstOperand + secondOperand);
                    break;


                case '-':
                    result.push(firstOperand - secondOperand);
                    break;


                case '*':
                    result.push(firstOperand * secondOperand);
                    break;


                case '/':
                    if (secondOperand !== 0) {
                        result.push(firstOperand / secondOperand);
                    } else {
                        console.log(`Error: not enough operands!`);
                        isOver = true;
                    }
                    break;
            }
        }
    }
    if (!isOver) {

        if (result.length === 1) {
            console.log(result[0]);
        } else {
            console.log(`Error: too many operands!`);
        }
    }



}

//-----------------
f2(
    [
        15,
        '/'
    ]
);



//console.log(`-----------------`);