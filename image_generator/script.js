const generateForm = document.querySelector(".generate-form");
const imageGallery = document.querySelector(".image-gallery");

const handleFormSubmission = (e) => {
  e.preventDefault();
  // getting values of  the user input and the image quantity from the form
  const userPrompt = e.srcElement[0].value;
  const userImgQuantity = e.srcElement[1].value;
  //   console.log(userPrompt, userImgQuantity);

  const imgCardMarkup = Array.from({ length: userImgQuantity }, () => {
    `<div class="img-card loading">
        <img src="images/loader.svg" alt="image">
        <a href="#" class="download-btn">
          <img src="images/download.svg" alt="download icon" />
        </a>
      </div>`;
  }).join("");
  imageGallery.innerHTML = imgCardMarkup;
  console.log(imgCardMarkup);
};

generateForm.addEventListener("submit", handleFormSubmission);
