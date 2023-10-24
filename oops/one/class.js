// class user {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   capitalise() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const user1 = new user("aakash", "yadavaakash@mail.com", "2324");

// console.log(user1.encryptPassword());
// console.log(user1.capitalise());

// #####################################
function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

user.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
user.prototype.capitalise = function () {
  return `${this.username.toUpperCase()}`;
};

const user2 = new user("vikas", "vikas@mail.com", 2343);

console.log(user2.capitalise());
