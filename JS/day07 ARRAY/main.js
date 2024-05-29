//task5
let array1 = [1, 2, 3, 4, 5];
console.log(array1.shift());
array1.push(6);
console.log(array1);
array1.length;

//task6
let array2 = [`a`, `b`, `c`, `d`, `e`];
console.log(array2);
array2.splice(1, 1, "đã thay đổi");
console.log(array2);

let array3 = [`a`, `b`, `c`, `d`, `e`];
let array4 = [...array3, `thêm vào`];
console.log(array4);
// array3.splice(5, 1, "đã thay đổi");
// console.log(array3);

let array5 = [...array2, ...array3];
console.log(array5);

//task7
const cars = ["Toyota", "Honda", "Kia", "BMW", "Audi", "Mitsubishi"];
document.write(`<ul>`);
for (let i = 0; i < cars.length; i++) {
  document.write(`<li>`, cars[i], `</li>`);
}
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

//task8
let array6 = [`a`, `b`, `c`, `d`, `e`];
console.log(array6);
console.log(array6.shift());
console.log(array6.pop());

//task9
let array7 = [1, 2, 3, 4, 5];
array7.splice(5, 0, 6);
console.log(array7);
array7.splice(0, 0, 0);
console.log(array7);
//loại bỏ ptu cuối
array7.pop();
console.log(array7);
//loại bỏ ptu đầu
array7.shift();
console.log(array7);

//task10
let array9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < array9.length; i++) {
  sum += array9[i];
  console.log(sum);
}
console.log("tong cong:" + sum);
