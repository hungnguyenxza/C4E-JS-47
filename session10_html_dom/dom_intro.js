
// let h1 = document.getElementById("welcome");

// console.dir(h1);
// console.log(h1.innerHTML);
// // console.log(h1.attributes);

// h1.innerHTML = "Hello world";

// let welcome = document.getElementById("welcome");
// => lấy ra thẻ có id = "welcome";
// console.dir(welcome);

// let h1s = document.getElementsByTagName("h1"); 
// => lấy ra tất cả thẻ h1

// let colors = document.getElementsByClassName("color");
// => lấy ra tất cả thẻ có class = "color"


// let listH1 = document.getElementsByTagName("h1");
// console.dir(listH1);

// let pDocument = document.getElementById("p-document");
// let listSpan = pDocument.getElementsByTagName("span");
// console.dir(listSpan);
// console.dir(pDocument);

let chieuCao = 170;//Number(prompt("Chiều cao (cm)"));
let canNang = 70;//Number(prompt("Cân nặng"));
chieuCao = chieuCao / 100; // đổi về m
let bmi = canNang / (chieuCao * chieuCao);
let tinhTrang = "";
if(bmi > 24){
  tinhTrang = "Béo";
}
else if(bmi < 18.5){
  tinhTrang = "Gầy";
}
else{
  tinhTrang = "Bình thường";
}
// let h1 = document.getElementsByTagName("h1");
// console.dir(h1);
// h1.innerHTML = tinhTrang;
// for (const h of h1) {
//   h.innerHTML = tinhTrang;
// }

// let h1 = document.getElementById("bmi");
// // h1.style.color = "crimson";
// // h1.style.fontSize = "large";
// // h1.innerHTML = tinhTrang;
// h1.className = "crimson";
// h1.innerHTML = tinhTrang;

// innerHTML có code chứa code của HTML.
// VD: document.getElementById("id").innerHTML 
// = "<p>Nội dung</p"

// let monHoc = ["Javascript", "Html", "Css"];

// let result = "";
// for (const mon of monHoc) {
//   result += "<li>"+ mon +"</li>";
// }
// let intro = "Ví dụ về code HTML: &nbsp; &lt;html&gt;&lt;/html&gt;";
// document.getElementById("danh-sach-mon-hoc").innerHTML = intro;


function displayInfor(){
  // lấy thông tin để hiển thị
  //alert("clicked");
  let name = document.getElementById("txtName").value;
  let age = document.getElementById("txtAge").value;
  let result = "Tên là: " + name
              + ", tuổi: " + age;
  document.getElementById("displayInfor").innerHTML = result;
}

function getNow(e){
  let now = new Date();
  let hh = now.getHours();
  let mm = now.getMinutes();
  let ss = now.getSeconds();

  let dd = now.getDate();
  let MM = now.getMonth() + 1;
  let yyyy = now.getFullYear();

  let result = `${hh}:${mm}:${ss} ${dd}/${MM}/${yyyy}`;
  document.getElementById('now').innerHTML = result;
  //document.getElementById("btnGetNow").outerHTML = '';
  //document.getElementById("btnGetNow").remove();
  //document.getElementById("btnGetNow").style.display = "none";
  console.log(e);
  e.target.style.display = "none";
}





