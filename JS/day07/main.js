// //task1
// function myfunction() {
//   alert("Bạn đã thêm vào giỏ hàng thành công !");
// }

// //task2
// function text1() {
//   console.log("nhấp một phím từ bàn phím");
// }
// console.log("nhập vào bàn phím tự động viết hoa");
// function MyFunction() {
//   let x = document.getElementById("text2");
//   x.value = x.value.toUpperCase();
// }

// //task 3
// const a = parseInt(prompt("nhận đầu vào: "));
// if (isNaN(a) == false) {
//   if (a % 2 === 0) {
//     console.log("số chẵn");
//   } else {
//     console.log("só lẻ");
//   }
// } else {
//   console.log("không phải là số");
// }

// //task4
// const x = Number(prompt("nhập x: "));
// const y = Number(prompt("nhập y: "));
// tong = x + y;
// hieu = x - y;
// tich = x * y;
// thuong = x / y;
// layDu = x % y;
// console.log(tong);
// console.log(hieu);
// console.log(tich);
// console.log(thuong);
// console.log(layDu);

//task5
let day = Number(prompt("nhập day: "));
if (isNaN(day) === false) {
  switch (day) {
    case 2:
      console.log(`đầu tuần`);
      break;
    case 4:
    case 5:
    case 6:
      console.log("giữa tuần");
      break;
    case 7:
    case 8:
      console.log("cuối tuần");
      break;
    default:
      console.log("Các trường hợp còn lại là không hợp lệ");
  }
} else {
  alert("không hợp lệ");
}
