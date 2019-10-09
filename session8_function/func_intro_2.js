// // // Nhận vào 2 số, nhập từ bàn phím
// // // viết function trả về tổng 2 số (k in, chỉ tính)
// // // nhận kết quả và in ra.
// // let soThuNhat = Number(prompt("nhập số thứ nhất"));
// // let soThuHai = Number(prompt("nhập số thứ hai"));

// // function tinhTong(a, b){
// //     return a + b;
// // }

// // let tong = tinhTong(soThuNhat, soThuHai);
// // print(`Tổng 2 số ${soThuNhat} và ${soThuHai} là: ${tong}`);

// // function print(message){
// //     console.log(message);
// //     // alert(message);
// // }

// // Kiểm tra số nguyên tố
// let N = parseInt(prompt("Nhập 1 số: "));

// if(N === 0 || N === 1){
//     console.log("Nhập sai");
// }
// else{
//     let isSNT = kiemTraSoNguyenTo(N);

//     if(isSNT){
//         console.log("Là số nguyên tố");
//     } else {
//         console.log("Không là số nguyên tố");
//     }
// }

// function kiemTraSoNguyenTo(N){
//     // Ý tưởng: đếm số nghiệm của N,
//     // Nếu lớn hơn 2, thì không là số NT
//     // Ngược lại thì là số NT
//     let count = 0;
//     for (let i = 1; i <= N; i++) {
//         if(N % i === 0){
//             count++;
//             if(count > 2){
//                 return false;
//             }
//         }
//     }
//     return true; // chứng tỏ return false
//     // chưa bao giờ chạy
//     // => count không lớn hơn 2
//     // => count <= 2

//     // if(count === 2){
//     //     return true;
//     // }else{
//     //     return false;
//     // }
// }

// // function a(){
// //     console.log("Hello");
// //     console.log("Hi");
// //     let x = 10;
// //     if(x === 10){
// //         return "Hi";
// //     }
// //     console.log("Hello");
// //     console.log("Hi");
// // }
// // let b = a();

// F = 1, 1, 2, 3, 5, ...

let N = parseInt(prompt("Nhập N"));
// Cách 1:
// let fi = [1, 1];
// // index = 2, N = 3
// // index = 3, N = 4
// if(N === 1 || N === 2){
//     return 1;
// }else{
//     for (let i = 2; i < N; i++){
//         fi[i] = fi[i - 1] + fi[i - 2];
//     }
//     return fi[N - 1];
// }

// Cách 2:

function fib(number){
    let fib1 = 1;
    let fib2 = 1;
    let fib = 2;
    for(let i = 3; i <= number; i++){
        fib = fib1 + fib2;
        fib1 = fib2;
        fib2 = fib;
    }
    return fib;
}

// Cách sử dụng đệ quy:

// N = 1 => 1
// N = 2 => 1;
// N > 2 => f(N) = f(N - 1) + f(N - 2);
function fibonacci(stt){
    if(stt === 1 || stt === 2){
        return 1;
    } else {
        return fibonacci(stt - 1) + fibonacci(stt - 2);
    }
}
console.log(fibonacci(N));

// Tính giai thừa
// N! = N * (N - 1)!
// N = 0 => 1

function giaiThua(N){
    if(N === 0){
        return 1;
    }
    return N * giaiThua(N - 1); // N * (N-1)!
}

// giaiThua(N); // => N!


// let listSearch = [folderImages];
// let searchString = 'ab';
// let result = [];
// while(listSearch.length > 0){
//     let search = listSearch.pop();
//     if(!search.isFolder){
//         if(search.name.indexOf('ab') >= 0){
//             result.push(search);
//         }
//     }else{
//         listSearch = listSearch.concat(search.content)
//     }
// }
// console.log(result);


let a = [1,2,3,4,5];
let b = [6,7,8];

a = a.concat(b);
