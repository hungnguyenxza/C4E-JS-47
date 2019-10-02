let arr = [1,2,3,4,5,6];

// console.log(arr);
// console.log(arr[1]);
// console.log(arr[5]);

// arr.push(7);
// console.log(arr);

// arr.unshift(-1,-2,-3);
// console.log(arr);

// arr.pop();
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);

// arr.splice(3, 5);
// console.log(arr);

// console.log(arr.pop());
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);

// let a = arr.pop();
// console.log(a);

// if(Array.isArray(arr)){
//     //code
// }


// Duyệt các phần tử của mảng


arr = [7, 9, 3, 10, -20];
let s = 0;
for (let index = 0; index < arr.length; index++) {
    s = s + arr[index];    
}
// Tính tổng các giá trị của mảng
console.log(s);

// Tính trung bình giá trị của mảng
let avg = s / arr.length;

// Tìm min/max

let min = arr[0];
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
    if(min > arr[i]){
        min = arr[i];
    }

    if(max < arr[i]){
        max = arr[i];
    }
}
console.log("Min " + min);
console.log("Max " + max);


// Sắp xếp: arr = [7, 9, 3, 10, -20];
for (let index = 0; index < array.length - 1; index++) {
    for (let i = index + 1; i < arr.length; i++) {
        if(arr[index] > arr[i]){
            let temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }
    }
}
console.log(arr);

// Tìm các số lớn hơn 5;

let result = [];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element > 5){
        result.push(element);
    }
}
console.log("Result " + result);
 



