const parent = document.querySelector(".parent");
console.log(parent);
console.log((child = parent.children));

for (let i = 0; i < child.length; i++) {
  const element = child[i].innerHTML;
  console.log(element);
}

console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const dayOne = document.querySelector(".day");
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);

console.log(parent.childNodes);
