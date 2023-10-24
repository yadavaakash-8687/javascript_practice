// function multiplyIt(num) {
//   return num * 9;
// }

// multiplyIt.value = 9;
// console.log(multiplyIt(9));
// console.log(multiplyIt.value);
// console.log(multiplyIt.prototype);

function createBill(item, price) {
  this.item = item;
  this.price = price;
}

createBill.prototype.increase = function () {
  this.price++;
};

createBill.prototype.printMe = function () {
  console.log(`the bill is rs.${this.price}.00 `);
};

const chai = new createBill("chai", 50);
const coffee = new createBill("coffee", 90);

console.log(chai);
console.log(coffee);
chai.printMe();
