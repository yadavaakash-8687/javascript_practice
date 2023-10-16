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
console.log(myCreatedDate4.toDateString());
