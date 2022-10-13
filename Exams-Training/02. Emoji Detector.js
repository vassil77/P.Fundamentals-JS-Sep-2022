function f2(params) {
    let string=params[0];
    let digitPattern=/[0-9]/g;
    let emojiPattern=/([:]{2}[A-Z][a-z]{2,}[:]{2})|([*]{2}[A-Z][a-z]{2,}[*]{2})/g;

    let digits=string.match(digitPattern);
    let coolThreshold=1;
    for (let i = 0; i < digits.length; i++) {
        coolThreshold*=Number(digits[i]);
    }

    let emoji=string.match(emojiPattern);
    let coolEmoji=[];

   for (const element of emoji) {
    let coolness=0;
    for (let j = 2; j < element.length-2; j++) {
        coolness+=element.charCodeAt(j);
    }
    //console.log(coolness);             //test
    if (coolness>coolThreshold) {
        coolEmoji.push(element);
    }
   }
   
console.log(`Cool threshold: ${coolThreshold}`);

console.log(`${emoji.length} emojis found in the text. The cool ones are:`);

for (let k = 0; k < coolEmoji.length; k++) {
    
    
    console.log(coolEmoji[k]);
}



}

//-----------------
f2
(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])
    
    ;