let myDate = new Date();
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
let myCreatedDate1 = new Date("2023-01-22");
let myCreatedDate2 = new Date("23-01-2023");
console.log(myCreatedDate1);
console.log(myCreatedDate2);

let myCreatedDate3 = new Date("2023-01-22");
console.log(myCreatedDate3.toDateString());

let myCreatedDate4 = new Date(2023, 0, 22);
console.log(myCreatedDate4.getTime());

let myCreatedDate5 = new Date(2023, 0, 22, 5, 14);
console.log(myCreatedDate5.toLocaleString());

let time = Date.now();
console.log(time);

myDate.toLocaleString("default", { weekday: "long" });

// ternary operator usage in date
const myDate2 = new Date();
const isMonday = myDate2.getDay() === 1; // Sunday is 0, Monday is 1

const options = {
  weekday: isMonday ? "short" : "long",
};

const formattedDay = myDate2.toLocaleString("default", options);

console.log(formattedDay);

// some array methods

let myArr = [1, 2, 3, 4, 5, 6, 7, 9];

console.log(myArr.slice(0, 3));

let myArr2 = [1, 0, 3, 7, 5, 6, 7, 9];

console.log(myArr2.splice(1, 4));
console.log(myArr2);

let truthy = "";

const result = truthy ? "exprIfTrue" : "exprIfFalse";

console.log(result);

const products = [
  { itemName: "iphone", itemPrice: "$1500", itemColor: "red" },
  { itemName: "samsumg", itemPrice: "$1000", itemColor: "black" },
  { itemName: "nokia", itemPrice: "$1900", itemColor: "silver" },
  { itemName: "moto", itemPrice: "$1500", itemColor: "red" },
  { itemName: "google", itemPrice: "$1700", itemColor: "gold" },
  { itemName: "vivo", itemPrice: "$100", itemColor: "red" },
  { itemName: "poco", itemPrice: "$1300", itemColor: "blue" },
];

products.forEach((item) => {
  item.itemColor === "red"
    ? console.log(item.itemPrice)
    : console.log(item.itemColor);
});

// // dom manipulation

// const parent = document.querySelector(".parent");
// console.log(parent);
