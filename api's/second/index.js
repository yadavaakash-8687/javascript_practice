const promiseOne = new Promise((res, reject) => {
  setTimeout(() => {
    console.log("task 1 done");
    res();
  }, 5000);
});
promiseOne.then(() => {
  console.log("promise 1 consumed");
});
// ##########################################
const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("resolve task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("task 2 has done");
});
// ###################################
const promiseThird = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ user: "aakash yadav", email: "yadavaakash8687@gamil.com" });
  }, 1000);
});

promiseThird.then((user) => {
  console.log(user);
});
// ####################################
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "aakash yadav", location: "delhi" });
    } else {
      reject("promise incomplete");
    }
  }, 1000);
});

promiseFour
  .then(({ username, location }) => {
    console.log(username, location);
  })
  .catch((error) => {
    console.log(error);
  });
// #########################################
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "aakash yadav", location: "delhi" });
    } else {
      reject("promise incomplete");
    }
  }, 1000);
});

promiseFive
  .then((user) => {
    return { username: user.username, location: user.location };
  })
  .then((data) => {
    console.log(`Name is ${data.username} and location is ${data.location}`);
  })
  .catch((error) => {
    console.log(error);
  });
// ############################################

const promiseSix = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      console.log({ languaeg: "javascript", framework: "react" });
    } else {
      reject("promise 6 was rejected");
    }
  }, 1000);
});

async function dealPromiseSix() {
  try {
    const response = await promiseSix;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

dealPromiseSix();

// #######################################

async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("error");
  }
}

getUsers();

// ########################

const jsonString = '{"name": "John", "age": 30}';
const jsObject = JSON.parse(jsonString); // Parses the JSON string into a JavaScript object
console.log(jsObject.name);

// ######################

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("errror");
  });
