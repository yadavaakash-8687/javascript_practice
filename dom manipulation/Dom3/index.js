function createLanguages(langName) {
  const li = document.createElement("li");
  //   alert(`you are adding languages ${langName}`);
  li.innerHTML = `${langName}`;
  document.querySelector(".list").appendChild(li);
}

createLanguages("javascript");
createLanguages("java");
createLanguages("ruby");

function optiAdding(langName) {
  const li = document.createElement("li");
  //   alert(`you are adding languages ${langName}`);

  li.appendChild(document.createTextNode(langName));
  document.querySelector(".list").appendChild(li);
}

optiAdding("2javascript");
optiAdding("2java");
optiAdding("2ruby");

// editing

const editContent1 = document.querySelector("li:nth-child(1)");
console.log((editContent1.innerHTML = "your"));

const editContent2 = document.querySelector("li:nth-child(2)");
console.log((editContent2.textContent = "python"));

editContent1.replaceWith(editContent2);
