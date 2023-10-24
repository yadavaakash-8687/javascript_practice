let myHeros = ["thor", "superman", "hulk", "captain"];
let heroPower = {
  thor: "hammer",
  superman: "fly",
  hulk: "strength",

  getHulkPower: function () {
    console.log(`hulk power is ${this.hulk}`);
  },
};

Object.prototype.aakash = function () {
  console.log("hello from aakash");
};

let name = "aakash     ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`the true length is ${this.trim().length}`);
};
name.trueLength();
