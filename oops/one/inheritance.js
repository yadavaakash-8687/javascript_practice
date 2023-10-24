class user {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`username is ${this.username}`);
  }
}

class teacher extends user {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new courese was added by ${this.username}`);
  }
}
const aakash = new teacher("aakash", "yadavaakash@.com", 1222);

aakash.addCourse();

console.log(aakash instanceof teacher);
