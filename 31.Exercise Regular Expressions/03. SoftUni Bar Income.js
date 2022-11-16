function f2(params) {
    // let regexp = /%[A-Z][a-z]+%[^|$%.]*<[A-Za-z]+>[^|$%.]*\|[0-9]+\|[^|$%.]*[0-9.]*[0-9]+\$/g;
    // let regexp = /%(?<customerName>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)\$/g;
    let regexp = /%(?<customer>[A-Z][a-z]*)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>[0-9]+(\.[0-9]+)?)\$/;
  
    // %   (?<customer>[A-Z][a-z]*)   %   [^|$%.]*?   <(?<product>\w+)>   [^|$%.]*?   \|(?<count>\d+)\|   [^|$%.]*?   (?<price>[0-9]+(\.[0-9]+)?)   \$   

  
    let income = 0;

    let line = params.shift();

    while (line !== 'end of shift') {
        let currentOrder;
        if ((currentOrder = regexp.exec(line))) {

            let {
                customer,
                product,
                count,
                price
            } = currentOrder.groups;

            let totalPrice = count * price;
            income += totalPrice;

            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
        }
        line = params.shift();
    }

    console.log(`Total income: ${income.toFixed(2)}`);
}

//Judge__________________
f2(
    ['%George%@<CRoissant>@|2|@10.3$',
        '%Peter%fghf<Gum>dfgdrfg|1|rtyr&&1.3$',
        '%Maria%<Cola>|1|2.4$',
        'end of shift'
    ]
);