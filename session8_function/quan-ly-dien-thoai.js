
// Quản lý điện thoại

let listPhones = [
    {
        'name': 'iPhone 11',
        'price': 50e+6,
        'factory': 'Apple',
        'amount': 100,
    },
    {
        'name': 'Galaxy Note 8',
        'price': 20e+6,
        'factory': 'Samsung',
        'amount': 200,
    },
    {
        'name': 'Bphone 2',
        'price': 15e+6,
        'factory': 'Bphone',
        'amount': 50,
    },
    {
        'name': 'Joy 2',
        'price': 10e+6,
        'factory': 'Vsmart',
        'amount': 20,
    },
    {
        'name': 'iPhone X',
        'price': 30e+6,
        'factory': 'Apple',
        'amount': 70,
    },
    {
        'name': 'Galaxy Note 10',
        'price': 60e+6,
        'factory': 'Samsung',
        'amount': 150,
    },
];

let menu = "1. Hiện danh sách điện thoại\n"
        + "2. Thêm điện thoại\n"
        + "3. Sửa điện thoại\n"
        + "4. Xóa điện thoại\n"
        + "5. Sắp xếp\n"
        + "6. Tìm\n"
        + "Nhấn phím bất kỳ để thoát.\n";

let isExit = false;
while(!isExit){
    let input = prompt(menu + "Mời bạn chọn:");
    
    if(input === "1"){
        // in danh sách
        inDanhSachDienThoai(listPhones);
    }
    else if(input === "2"){
        // thêm điện thoại
        themDT();
        inDanhSachDienThoai(listPhones);
    }
    else if(input === "3"){
        // sửa điện thoại
        let choose = Number(prompt("Nhập số thứ tự muốn sửa:"));
        let index = choose - 1;
        if(index >= listPhones.length || index < 0){
            alert("Nhập sai rồi");
        }else{
            let phone = listPhones[index];
            let name = prompt("Nhập tên:");
            let price = Number(prompt("Nhập giá:"));
            let factory = prompt("Nhập nhà sản xuất:");
            let amount = Number(prompt("Nhập số lượng:"));
            phone.name = name;
            phone.price = price;
            phone.factory = factory;
            phone.amount = amount;
            alert("Sửa thành công");
        }
    }
    else if(input === "4"){
        // xóa điện thoại
        
    }
    else if(input === "5"){
        // sắp xếp
        sapXepTangDan('amount');
    }
    else if(input === "6"){
        // tìm
    }
    else{
        isExit = true;
    }
}

function inDanhSachDienThoai(phones){
    let result = '';
    for (let i = 0; i < phones.length; i++) {// duyệt từng đt
        const phone = phones[i];
        result += (i + 1) + '. ';
        for (const key in phone) { // duyệt từng key-value của đt
            const value = phone[key];
            result += `${key}: ${value}, `;
        }
        result = result.substr(0, result.length - 2);
        result += '\n\n';
    }
    alert(result);
}

function themDT(){
    let value1 = prompt("Nhập tên:");
    let value2 = Number(prompt("Nhập giá:"));
    let value3 = prompt("Nhập nhà sản xuất:");
    let value4 = Number(prompt("Nhập số lượng:"));
    listPhones.push({
        'name': value2,
        'price': value1,
        'factory': value3,
        'amount': value4,
    });
}

function sapXepTangDan(sapXepTheo){
    //JSON.parse(JSON.stringify(listPhones))
    //JSON.stringify(listPhones)

    // Cách 1:
    let copy = JSON.parse(JSON.stringify(listPhones));

    // cách 2:
    let mangMoi = [];
    for (const phone of listPhones) {
        let object = {};
        for (const key in phone) {
            object[key] = phone[key];
        }
        mangMoi.push(object);
    }

    // cách 3
    let copy2 = listPhones.slice();

    for (let i = 0; i < copy.length - 1; i++) {
        for (let j = i + 1; j < copy.length; j++) {
            if(copy[i][sapXepTheo] > copy[j][sapXepTheo]){
                let temp = copy[i];
                copy[i] = copy[j];
                copy[j] = temp;
            }
        }
    }
    inDanhSachDienThoai(copy);
}