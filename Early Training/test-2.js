
let message = "0123456789";
let index = 4;
let part = "---";

message = message.slice(0, index) + part + message.slice(index);
console.log(message);

message = "0123456789";
index = 4;
part = "---";

message = message.substring(0, index) + part + message.substring(index);
console.log(message);