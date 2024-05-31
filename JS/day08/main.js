//bài 1
function sayHello(name) {
  console.log("helo", name);
}
sayHello("hi");

//bài 2
function square(number) {
  return Math.pow(number, 2);
}
console.log(square(4));

//bài 3
function islongstring(str) {
  if (str.length > 10) {
    console.log("true");
  } else {
    console.log("false");
  }
}
islongstring("dsd");

//bài 4
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
const result = sumArray([1, 2, 3, 4, 5]);
console.log(result);
