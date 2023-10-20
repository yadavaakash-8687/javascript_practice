// const heading = document.querySelector(".heading");
// console.log(heading);

// let changeText = () => {
//   heading.innerHTML = "practice done ";
// };
// const changeHeading = setTimeout(changeText, 5000);
// const btn = document.querySelector(".btn").addEventListener("click", () => {
//   clearTimeout(changeHeading);
// });

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
randomColor();
