
let person = {
    "name": "Phạm Văn A",
    "age": 20,
    2: [1,2,3],
    "name": "Nguyễn Thị B"
}

// console.log(person);
// // console.log(person["name"]);
// // console.log(person.age);

// person["age"] = 30;
// person["farvorite"] = "Javascript";
// console.log(person);

// delete person["age"];
// console.log(person);

for (const key in person) {
    const value = person[key];
    console.log(key + ": " + value);
}

let arr = ["a", "b", "d"];
for (const value of arr) {
    console.log(value);
}

// for (const value of person) {
//     console.log(value);
// }

arr.forEach(element => {
    console.log(element);
});

