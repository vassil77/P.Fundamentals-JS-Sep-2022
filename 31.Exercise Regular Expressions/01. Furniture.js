function f2(params) {
    let regexp = />>[A-Z][A-Za-z]+<<[0-9]*[.]*[0-9]+![0-9]+/g;
    let line = params.shift();
    let spendMoney = 0;
    console.log(`Bought furniture:`);
    while (line !== 'Purchase') {
        let matches = line.match(regexp);

        if (matches !== null) {
            let furniture = matches[0].split('<<').shift();
            furniture = furniture.split('>>').pop();

            let price = matches[0].split('!').shift();
            price = Number(price.split('<<').pop());

            let quantity = Number(matches[0].split('!').pop());

            spendMoney+=price*quantity;

            console.log(furniture);

        }


        // console.log(matches);



        line = params.shift();
    }

    console.log(`Total money spend: ${spendMoney.toFixed(2)}`);
}

//Judge__________________
f2(
    ['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']

);