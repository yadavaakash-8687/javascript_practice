function setUsernmae(username) {
  this.username = username;
}

function createUser(username, email, password) {
  setUsernmae.call(this, username);
  this.emai = email;
  this.password = password;
}

const vikas = new createUser("vikas", "vikas@gmail.com", "pppweo");

console.log(vikas);
