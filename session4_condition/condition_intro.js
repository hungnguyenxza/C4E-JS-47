let a = Number(prompt("Nhập số thứ nhất: "));
let b = Number(prompt("Nhập số thứ hai: "));

if(a >= b){
    console.log("a lớn hơn bằng b");
}
else {
    console.log("a nhỏ hơn b");
}

let c = Number(prompt("Nhập số thứ ba: "));

if(a >= b && a > c){
    console.log("a là số lớn nhất");
}
else if(b >= a && b >= c){
    console.log("b là số lớn nhất");
}
else {
    console.log("c là số lớn nhất");
}

// Nhập vào 1 tháng trong năm, 
// nếu tháng từ 1 -> 3: in ra Mùa xuân,
// nếu tháng từ 4 -> 6: in ra Mùa hè,
// nếu tháng từ 7 -> 9: in ra Mùa thu,
// nếu tháng từ 10 -> 12: in ra Mùa đông,

let month = Number(prompt("Nhập vào 1 tháng trong năm: "));

if(month < 1 || month > 12){
    console.log("Nhập sai tháng");
}
else if(month <= 3){
    console.log("Mùa xuân");
}
else if(month <= 6){
    console.log("Mùa hè");
}
else if(month <= 9){
    console.log("Mùa thu");
}
else {
    console.log("Mùa đông");
}


// Nhập a và b, của pt: ax + b = 0;
// In ra pt. VD: a = 5, b = 3 => 5x + 3 = 0
// giải phương trình.
// 1. Vô số nghiệm
// 2. Vô nghiệm.
// 3. Nghiệm duy nhất, tìm nghiệm x = -b/a;


let total = 60;
let tongTienDien = 0;
let tongTienB1 = 0;
let tongTienB2 = 0;
let tongTienB3 = 0;
let tongTienB4 = 0;
let tongTienB5 = 0;
let tongTienB6 = 0;
if (total > 400){
    let soDien = total - 400; // 
    tongTienB6 = soDien * 2.927;
    tongTienDien = tongTienDien + tongTienB6; // 
    total = total - soDien; // 400
}
if(total > 300){
    let soDien = total - 300; // 
    tongTienDien = tongTienDien + soDien * 2.834; // 20 * 2.834
    total = total - soDien; // 300;
}

if (total > 200){
    let soDien = total - 200; // 
    tongTienDien = tongTienDien + soDien * 2.536; // 
    total = total - soDien; // 400
}
if(total > 100){
    let soDien = total - 100; // 
    tongTienDien = tongTienDien + soDien * 1.734; // 20 * 2.834
    total = total - soDien; // 300;
}
//60
if (total > 50){
    let soDien = total - 50; // 10
    tongTienDien = tongTienDien + soDien * 1.678; // 
    total = total - soDien; // 50
}
if(total > 0){
    let soDien = total; // 20
    tongTienDien = tongTienDien + soDien * 1.678; // 20 * 2.834
}

// console.log("B1" + tongTienB1);
// console.log("B1" + tongTienB2);
// console.log("B1" + tongTienB3);
// console.log("B1" + tongTienB4);
// console.log("B1" + tongTienB5);
// console.log("B1" + tongTienB6);


// if(total < 50){
//     total * giaTien => in
// }
// else if(total < 100){ //60
//     50 * giaTien1 => 
//     (total - 50) * giaTien2 // 10 * => in 
// }
// else if(total < 200){
//     50 * 
//     50 * 
//     ? * 
// }
// else if(total < 200){
//     50 * 
//     50 * 
//     ? * 
// }

// Nhập vào 1 tháng, in ra màn hình số ngày của tháng đó

let month = Number(prompt("Nhập vào 1 tháng: "));

if(month === 1 || month === 3 || month === 5){
    console.log("Có 31 ngày");
}
else if(month === 4 || month === 6){
    console.log("Có 30 ngày");
}
else if(month === 2){
    console.log("Có 28 hoặc 29 ngày");
}
else{
    console.log("Nhập sai rồi");
}

switch(month){
    case 1:
    case 3:
        console.log("Có 31 ngày");
        break;
    case 4:
    case 6:
        console.log("Có 30 ngày");
        break;
    case 2:
        console.log("Có 28 hoặc 29 ngày");
        break;
    default:
        console.log("Nhập sai rồi");
        break;
}