function f2(params) {

    // let regexTicket = /[^, ]+/g;
    // let listTickets = params.match(regexTicket);
    let listTickets = params.split(',').map(x => x.trim());
    // console.log(listTickets);

    if (listTickets !== null) {
        for (const ticket of listTickets) {
            if (ticket.length === 20) {
                // let regexNoMatch = /[^@#$^]{20}/;
                let regexJackpot = /([@]{20})|([#]{20})|([$]{20})|([\^]{20})/;
                let left = ticket.slice(0, 10);
                let right = ticket.slice(10);
                let regex6 = /([@]{6,})|([#]{6,})|([\$]{6,})|([\^]{6,})/;

                if (regexJackpot.test(ticket)) {
                    console.log(`ticket "${ticket}" - 10${ticket[0]} Jackpot!`);

                } else if (regex6.test(left) && regex6.test(right)) {
                    let leftMatch = left.match(regex6).shift();
                    let rigthMatch = right.match(regex6).shift();
                    let minLength = Math.min(leftMatch.length, rigthMatch.length);
                    leftMatch = leftMatch.slice(0, minLength);
                    rigthMatch = rigthMatch.slice(0, minLength);

                    if (leftMatch === rigthMatch) {
                        console.log(`ticket "${ticket}" - ${minLength}${leftMatch[0]}`);

                    } else {
                        console.log(`ticket "${ticket}" - no match`);
                    }

                } else {
                    console.log(`ticket "${ticket}" - no match`);
                }


            } else {
                console.log(`invalid ticket`);
            }
        }
    }
}

//Judge__________________
f2(
    'validticketnomatch:(, ^^^^^^abcd^^^^^^^^^^, ^^^^^^^^^^^^^^^^^^^^,  sdfsdf, 012345678901234567$$,  abc34567890123456789'
);