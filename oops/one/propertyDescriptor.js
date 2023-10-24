const value = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(value);

const user = {
  name: "aakash",
  email: "yadavaakash@mail.com",
  password: 12344,
};

console.log(Object.getOwnPropertyDescriptor(user, "name"));

Object.defineProperty(user, "name", {
  writable: false,
});

console.log(Object.getOwnPropertyDescriptor(user, "name"));
