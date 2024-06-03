//task 1
function myfunction() {
  const name1 = document.getElementById("localstorage").value;
  localStorage.setItem(`name1`, name1);
}
// function myfunction() {
//   const name2 = document.getElementById("sesionstorage").value;
//   sessionStorage.setItem(`name2`, name2);
// }
function mydelete() {
  const xoa1 = document.getElementById("localstorage").value;
  localStorage.clear(xoa1);
  //   const xoa2 = document.getElementById("sesionstorage").value;
  //   sessionStorage.clear(xoa2);
}
