class user {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`username is ${this.username}`);
  }
  static createId() {
    return `1234`;
  }
}

const user1 = new user("aakash");
// console.log(user1.createId());

class teacher extends user {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const user2 = new teacher("vikas", "vikas@gamil.com");
user2.logMe();
user2.createId();
