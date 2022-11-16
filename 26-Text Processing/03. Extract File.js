function f2(params) {
let result=params.split('\\').pop().split('.');
let extension=result.pop();
let filename=result.join('.');

console.log(`File name: ${filename}`);
console.log(`File extension: ${extension}`);
}

//Judge__________________
f2 (
    'C:\\Projects\\Data-Structures\\LinkedList.cs'
        );



//console.log(`-----------------`);