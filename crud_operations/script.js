var submitButton = document.querySelector("#btn");
submitButton.addEventListener("click", Submit);

function Submit() {
  retrieveData();
  // var readData = readingDateFromLocalStorage(dataEntered);
  // insert(readData);
}

// #retriving data from form
function retrieveData() {
  var enteredName = document.querySelector("#name").value;
  var enteredJob = document.querySelector("#job").value;
  var enteredExperience = document.querySelector("#exp").value;
  var showAlert = true;

  if (enteredName === "") {
    alert("Name field is empty. Please fill in your name.");
    showAlert = false; // Set the flag to false
  } else if (enteredJob === "") {
    alert("Job field is empty. Please specify your job.");
    showAlert = false; // Set the flag to false
  } else if (enteredExperience === "") {
    alert("Experience field is empty. Please enter your experience.");
    showAlert = false; // Set the flag to false
  }

  if (showAlert) {
    var arr = [enteredName, enteredJob, enteredExperience];
    console.log(arr);
  }
}

// #data in local storage

// function readingDateFromLocalStorage(dataEntered) {
//   // #setting data in localstorage
//   localStorage.setItem("Name", dataEntered[0]);
//   localStorage.setItem("Job", dataEntered[1]);
//   localStorage.setItem("Experience", dataEntered[2]);

//   //   #getting data from localstorage

//   var gname = localStorage.getItem("Name", name);
//   var gjob = localStorage.getItem("Job", job);
//   var gexperience = localStorage.getItem("Experience", experience);

//   var arr = [gname, gjob, gexperience];
//   return arr;
// }

// function readingDateFromLocalStorage(dataEntered) {
//   //   // #setting data in localstorage

//   var [name, job, experience] = dataEntered;
//   var setname = localStorage.setItem("Name", name);
//   var setjob = localStorage.setItem("Job", job);
//   var setexperience = localStorage.setItem("Experience", experience);

//   //   //   #getting data from localstorage

//   var gname = localStorage.getItem("Name", setname);
//   var gjob = localStorage.getItem("Job", setjob);
//   var gexperience = localStorage.getItem("Experience", setexperience);

//   var arr = [gname, gjob, gexperience];
//   return arr;
// }

// function insert(readData) {
//   var row = table.insertRow();
// }
