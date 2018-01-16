var nomorA = 10
var nomorB = 5

// LEVEL 0

nomorA + nomorB
nomorA - nomorB
nomorA * nomorB
nomorA / nomorB
nomorA % nomorB


// LEVEL 2

function add(tambah) {
  return nomorA + nomorB;
}
console.log(add());

function substract(kurang) {
  return nomorA - nomorB;
}
console.log(substract());

function multiply(kali) {
  return nomorA * nomorB
}
console.log(multiply());

function divide(bagi) {
  return nomorA / nomorB
}
console.log(divide());

function modulo() {
  return nomorA % nomorB
}
console.log(modulo());


// LEVEL 2

console.log(add(substract(), divide()));