const a = Number(prompt("giá trị đầu vào một số từ người dùng: "));
if (isNaN(a) === false) {
  if (a > 0) {
    console.log("số dương");
  } else if (a < 0) {
    console.log("số âm");
  } else {
    console.log("số không");
  }
} else {
  console.log("nhập lại");
}
