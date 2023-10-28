const heading = document.querySelector(".heading");
console.log(heading);

let changeText = () => {
  heading.innerHTML = "practice done ";
};
const changeHeading = setTimeout(changeText, 5000);
const btn = document.querySelector(".btn").addEventListener("click", () => {
  clearTimeout(changeHeading);
});
