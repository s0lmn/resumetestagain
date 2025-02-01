/* Smooth Scroll for Ribbon Navigation */
document.querySelectorAll('.ribbon a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

/* --------------------------
   Art Section Image Slider
----------------------------- */
const artImages = [
  "img/CBE JACKETSHIRT.png",
  "img/1711971477216.jpeg",
  "img/1711971776130.jpeg"
];
const artCaptions = [
  "CBE jackets/shirts",
  "CBE activity poster for open house",
  "Organic Solvent Nanofiltration Poster for open house"
];
let currentArtIndex = 0;
const artImgElement = document.getElementById("art-img");
const artCaptionElement = document.getElementById("art-caption");

function updateArtSlider() {
  artImgElement.src = artImages[currentArtIndex];
  artCaptionElement.innerText = artCaptions[currentArtIndex];
}

function nextImageArt() {
  currentArtIndex = (currentArtIndex + 1) % artImages.length;
  updateArtSlider();
}

function prevImageArt() {
  currentArtIndex = (currentArtIndex - 1 + artImages.length) % artImages.length;
  updateArtSlider();
}

/* ---------------------------
   STEM Section Image Slider
------------------------------ */
const stemMedia = [
  { type: "video", src: , caption: "Internship melt and cast soap" },
  { type: "video", src: ", caption: "Soap Stamper" },
  { type: "video", src: , caption: "Arduino" }
];

let currentStemIndex = 0;
const stemContainer = document.getElementById("slider-stem");
const stemCaptionElement = document.getElementById("stem-caption");

function updateStemSlider() {
  const media = stemMedia[currentStemIndex];
  let newContent;

  if (media.type === "video") {
    newContent = `<video id="stem-video" class="photoshop-img" width="300" height="180" controls>
      <source src="${media.src}" type="video/mp4">
      Your browser does not support the video tag.
    </video>`;
  } else {
    newContent = `<img id="stem-img" class="photoshop-img" src="${media.src}" alt="STEM Image">`;
  }

  stemContainer.querySelector(".slider-content").innerHTML = newContent;
  stemCaptionElement.innerText = media.caption;
}

function nextImageSTEM() {
  currentStemIndex = (currentStemIndex + 1) % stemMedia.length;
  updateStemSlider();
}

function prevImageSTEM() {
  currentStemIndex = (currentStemIndex - 1 + stemMedia.length) % stemMedia.length;
  updateStemSlider();
}

/* ---------------------------
   Popup for Timeline Milestones
------------------------------ */
const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");
const popupImage = document.getElementById("popup-image");

function showDetails(type) {
  let text = "";
  let imgSrc = "";
  if (type === "bmt") {
    text = "Completed Basic Military Training in 2024, gaining essential discipline and resilience.";
    imgSrc = "images/bmt.png";
  } else if (type === "spf") {
    text = "Served in the Singapore Police Force from 2024-2025, developing leadership and teamwork skills.";
    imgSrc = "images/spf.png";
  } else if (type === "intern") {
    text = "Supported the Fragrance Lab as an Intern from Sep 2023 to Mar 2024, acquiring hands-on experience in quality control and product development.";
    imgSrc = "images/intern.png";
  } else if (type === "retail") {
    text = "Worked as a Retail Assistant from Jun 2023 to Sep 2023, enhancing customer service and sales skills.";
    imgSrc = "images/retail.png";
  }
  popupText.innerText = text;
  popupImage.src = imgSrc;
  popup.classList.add("show");
}

function closePopup() {
  popup.classList.remove("show");
}
