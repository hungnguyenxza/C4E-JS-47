// for (let index = 0; index < 5; index++) {
//     console.log(index);
// }


// let s = 0;
// for (let index = 1; index <= 100; index++) {
//     //s = s + index;
//     s += index;
// }
// console.log(s);

// let i = 0;
// while(i < 10){
//     console.log(i);
//     i++;
// }

// let pass = prompt("Nhập mật khẩu: "); // 1234

// while(pass.length < 8){ // pass nhỏ hơn 8 ký tự
//     pass = prompt("Nhập lại mật khẩu đủ 8 ký tự: "); // 12345
//     // 12345678
// }

// alert(pass);
//console.log(pass);

// //in ra các số chẵn
// for (let i = 0; i < 100; i++) {
//     if(i % 2 === 1){ // nếu i là số lẻ
//         break;
//     }
//     console.log(i);
// }




let pass = prompt("Nhập mật khẩu: "); // 1234

while(true){ // pass nhỏ hơn 8 ký tự
    if(pass.length >= 8){
        break;
    }
    pass = prompt("Nhập lại mật khẩu đủ 8 ký tự: "); // 12345
    // 12345678
}
alert(pass);