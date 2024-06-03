function myfuntion() {
  let product = { id: 1, name: "iPhone 4", price: 200, quantity: 1 };
  localStorage.setItem(`product`, `${product}`);
}
