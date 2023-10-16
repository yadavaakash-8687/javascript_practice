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
