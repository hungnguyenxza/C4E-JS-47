
// // let question = {
// //   title:'Nội dung câu hỏi',
// //   answer: [
// //     {
// //       'content': 'Nội dung câu trả lời 1',
// //       'isRight': true,
// //     },
// //     {
// //       'content': 'Nội dung câu trả lời 2',
// //       'isRight': false,
// //     },
// //     {
// //       'content': 'Nội dung câu trả lời 3',
// //       'isRight': false,
// //     },
// //     {
// //       'content': 'Nội dung câu trả lời 4',
// //       'isRight': false,
// //     },
// //   ],
// //   isMultipleChoose: false
// // }
// // let arr = [1,2,3,4,5];
// // let s = JSON.stringify(question);
// // let a = JSON.stringify(arr);
// // // console.log(s);
// // // console.log(a);

// // let q = JSON.parse(s);
// // console.log(q);

// let json = `
//   [
//     {
//       "name": "iPhone X",
//       "price": 20000000
//     },
//     {
//       "name": "Note 10",
//       "price": 30000000
//     }
//   ]
// `;
// console.log(json);
// let arr = JSON.parse(json);
// console.log(arr);

// let bodyTable = document.getElementById("data");
// {/* <tr>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr> */}
// let s = '';
// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   s += '<tr>';
//   s += '<td>' + (i + 1) + '</td>';
//   s += '<td>' + element.name + '</td>';
//   s += '<td>' + element.price + '</td>';
//   s += '</tr>';
// }
// bodyTable.innerHTML = s;

function getWeather(t){
  let xhr = new XMLHttpRequest();
  let url = "http://demo1167548.mockable.io/api/get-current-weather";
  
  xhr.open("GET", url);
  xhr.onreadystatechange = function (){
    if(this.readyState === 4 && this.status === 200){
      displayTodayWeather(this.responseText);
      t.style.display = 'none';
    }
  }
  xhr.send();
}
function displayTodayWeather(json){
  let weather = JSON.parse(json);
  document.getElementById("context").innerHTML = 
  `<img src="images/${weather.context}.png" width="100px" height="100px"/>`;
  document.getElementById("date").innerHTML = weather.date;
  document.getElementById("temperature").innerHTML = weather.temperature + "&#176;C";
}

function getWeatherWeek(t){
  let xhr = new XMLHttpRequest();
  let url = "http://demo1167548.mockable.io/api/get-weather-of-week";
  
  xhr.open("GET", url);
  xhr.onreadystatechange = function (){
    if(this.readyState === 4 && this.status === 200){
      displayWeekWeather(this.responseText);
      t.style.display = 'none';
    }
  }
  xhr.send();
}
function displayWeekWeather(json){
  let weathers = JSON.parse(json);
  let table = document.getElementById("weekWeather");
  let s = '';
  for (let i = 0; i < weathers.length; i++) {
    const weather = weathers[i];
    s += '<tr>';

    s += `<td><img src="images/${weather.context}.png" width="50px" height="50px"/></td>`
    s += `<td>${weather.date}</td>`;
    s += `<td>${weather.temperature}&#176;C</td>`;
    s += '</tr>';
  }
  table.innerHTML = s;
}

setTimeout(function(){
  location.reload();
}, 10000);

setTimeout(function(){
  for (const btn of document.getElementsByTagName("button")) {
    btn.click();
  } 
}, 2000);