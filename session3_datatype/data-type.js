let a = 5;
let b = -10;
const pi = 3.14;

let name = "Nam";
let c = 'Nguyễn Thị B';
let d = `Vũ Văn C ${a}`;

// console.log(name);
// console.log(c);
// console.log(d);

let fullName = "Phạm Văn " + name;
//console.log(fullName);

// let m = 20;
// let n = "30";
// console.log(m + n); // 2030
// console.log(m); // 20

// let h = Number(n) + "" + m;

let myName = prompt("Hãy nhập tên của bạn: ");
let yearOfBirth = Number(prompt("Hãy nhập năm sinh: "));

let age = 0;//prompt("Hãy nhập tuổi của bạn: ");
age = 2019 - yearOfBirth;


let result = "Xin chào " + myName + ", bạn đã " + age + " tuổi";
let result1 = `Xin chào ${myName}, bạn đã ${age} tuổi`;

console.log(result);







