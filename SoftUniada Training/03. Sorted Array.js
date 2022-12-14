function f2(params) {
let n=Number(params.shift());
let array=params.shift().split(' ').map(Number);

for (let i = 0; i < n-1; i++) {
  if (i%2===0) {
    if (array[i]<=array[i+1]) {
       let buffer=array[i];
       array[i]=array[i+1];
       array[i+1]=buffer; 
    }
  } else {
    if (array[i]>=array[i+1]) {
        let buffer=array[i];
        array[i]=array[i+1];
        array[i+1]=buffer; 
     }
  }
    
}

console.log(array.join(' '));
}

// JUDGE
f2 ([
    6,
    '22 40 76 87 91 123'
]);



