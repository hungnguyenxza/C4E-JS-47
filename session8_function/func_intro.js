function welcome(){
    console.log("Welcome C4E 46 và 47!");
}

// welcome();
// welcome();
// welcome();


function xinChao(a){
    console.log("Xin chào: " + a);
}

// let name = prompt("Nhập tên");
// xinChao(name);

function tinhTong2So(soThuNhat, soThuHai){
    console.log(`${soThuNhat} + ${soThuHai} = ${soThuNhat + soThuHai}`);
}

let a = 5;
let b = 10;
// tinhTong2So(a, b);

// function: nhận tên và năm sinh, hiện ra
// Xin chào: [tên], bạn [tuổi] tuổi.

function xinChao2(name, yearOfBirth){
    let age = 0;

    function tinhTuoi(year){
        let now = new Date();
        age = now.getFullYear() - yearOfBirth;
    }
    tinhTuoi(yearOfBirth);

    console.log("Xin chào: " + name + ", bạn " +
    age + " tuổi");
}

let favorite = ['1', '2'];
function getFullName(){
    console.log(this.FirstName + " " + this.LastName);
}
let person = {
    'FirstName': "Nguyễn",
    'LastName': "Hoàng",
    'FullName': getFullName,
    'Favorite': favorite
}

// person.FullName();
// getFullName();

let xinChao3 = function (name){
    console.log("xin chào: " + name);
}
// xinChao3("Hương");


function doiTen(name){
    console.log(name);
    name = "abc";
    console.log(name);
}

let tenThat = "Nam";
doiTen(tenThat);
// console.log(tenThat); // Nam;

let person = {
    'name': 'Nam'
}
function doiTen2(personNaoDo){
    personNaoDo.name = "abc";
}
doiTen2(person);
console.log(person); // name: abc;

let arr = [1,2,3,4,5];
function sapXepTangDan(array){
    // code sắp xếp
    sapXep(array, true);
}
function sapXepGiamDan(array){
    // code sắp xếp
    sapXep(array, false);
}

function sapXep(array, isTangDan){
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if(isTangDan){
                if(array[i] > array[j]) {
                    let temp = array[j];
                    array[j] = array[i];
                    array[i] = temp;
                }
            }else{
                if(array[i] < array[j]) {
                    let temp = array[j];
                    array[j] = array[i];
                    array[i] = temp;
                }
            }
        }        
    }
}

sapXepTangDan(arr);
console.log(arr);
sapXepGiamDan(arr);
console.log(arr);