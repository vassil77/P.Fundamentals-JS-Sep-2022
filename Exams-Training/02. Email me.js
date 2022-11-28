function f2(params) {

let email=params.shift().split('@');
let left=email.shift();
let right=email.shift();
let sum=0;

for (const char of left) {
    sum+=char.charCodeAt();
}

for (const char of right) {
    sum-=char.charCodeAt();
}

if (sum>=0) {
    console.log(`Call her!`);
} else {
    console.log(`She is not the one.`); 
}

// console.log(sum);
}

// JUDGE
f2 ([
    'gergana.ivanova@yahoo.com'
]);



