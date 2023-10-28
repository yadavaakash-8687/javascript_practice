// const randomColor = function () {
//   const hex = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += hex[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };
// randomColor();

const heading = document.querySelector(".heading");
const startChangingColor = document.querySelector(".btnstart");
const stop = document.querySelector(".btnstop");

let originalText = heading.innerHTML;
let isPracticeDone = false;

const toggleText = () => {
  if (isPracticeDone) {
    heading.innerHTML = originalText;
  } else {
    heading.innerHTML = "practice done";
  }
  isPracticeDone = !isPracticeDone; // Toggle the flag
};

let intervalId; // To store the interval ID

startChangingColor.addEventListener("click", () => {
  // Start toggling the text every 1 second
  intervalId = setInterval(toggleText, 1000);
});

// stop.addEventListener("click", () => {
//   // Stop the toggling interval
//   clearInterval(intervalId);
// });
