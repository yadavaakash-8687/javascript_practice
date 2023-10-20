const newDiv = document.createElement("div");
newDiv.className = "main";
newDiv.id = Math.round(Math.random() * 10 + 1);
newDiv.setAttribute("title", "generated title");
newDiv.style.backgroundColor = "coral";

const content = document.createTextNode(
  "hello this is a basic page where aakash is practicing his javascript concept"
);
newDiv.append(content);
console.log(newDiv);
document.body.appendChild(newDiv);
