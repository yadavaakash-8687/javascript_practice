const requestUrl = "https://api.github.com/users/yadavaakash-8687";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(data);
    console.log(data.followers);
    const heading = document.querySelector(".heading");
    const image = document.querySelector(".img");
    image.setAttribute("src", data.avatar_url);

    heading.innerHTML = data.login;
  }
};
xhr.send();
