const generateForm = document.querySelector(".generate-form");
const imageGallery = document.querySelector(".image-gallery");

const OPENAI_API_KEY = "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";

const updateImageCard = (imgDataArray) => {
  imgDataArray.forEach((imgObject, index) => {
    const imgCard = imageGallery.querySelectorAll(".img-card")[index];
    const imgElement = imgCard.querySelector("img");

    // setting AI-generated image to the imagecard
    const aiGeneratedImg = `data:image/jpeg;base64,${imgObject.b64_json}`;
    imgElement.src = aiGeneratedImg;
    // removing the loading class when image is loaded
    imgElement.onload = () => {
      imgCard.classList.remove("loading");
    };
  });
};

const generateAiImages = async (userPrompt, userImgQuantity) => {
  try {
    // send a request to openAI and generate images using input prompt
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          prompt: userPrompt,
          n: parseInt(userImgQuantity),
          size: "512x512",
          response_format: "b64_json",
        }),
      }
    );

    if (!response.ok)
      throw new Error("Faild to generate images! Please try again.");

    const { data } = await response.json();
    updateImageCard([...data]);
  } catch (error) {
    alert(error.message);
  }
};

const handleFormSubmission = (e) => {
  e.preventDefault();
  // getting values of  the user input and the image quantity from the form
  const userPrompt = e.srcElement[0].value;
  const userImgQuantity = e.srcElement[1].value;
  //   console.log(userPrompt, userImgQuantity);

  const imgCardMarkup = Array.from(
    { length: userImgQuantity },
    () =>
      `<div class="img-card loading">
      <img src="images/loader.svg" alt="image">
      <a href="#" class="download-btn" >
          <img src="images/download.svg" alt="download icon">
      </a>
    </div>`
  ).join("");
  imageGallery.innerHTML = imgCardMarkup;
  generateAiImages(userPrompt, userImgQuantity);
};

generateForm.addEventListener("submit", handleFormSubmission);
