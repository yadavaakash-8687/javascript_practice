// const user = {
//   userName: "aakash",
//   loginDevices: 9,
//   signedIn: true,

//   getUserDetails: function () {
//     console.log(`got details of ${this.userName}`);
//     console.log(this);
//   },
// };

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);

function Users(userName, loginCount, isLoggedIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function () {
    console.log(`Welcome ${this.userName}`);
  };
}

const userOne = new Users("aakash", 8, false);
const userTwo = new Users("vikas", 10, true);

console.log(userOne.loginCount);
console.log(userTwo.userName);
userOne.greeting();
userTwo.greeting();
