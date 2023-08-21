// script.js

const scrollDuration = 40000; // 40 seconds

document.addEventListener("DOMContentLoaded", function () {
  const imageContainer = document.querySelector(".image-container");
  const images = imageContainer.querySelectorAll("img");

  let totalWidth = 0;
  images.forEach(image => {
    totalWidth += image.width;
  });

  // Double the width to account for duplicated images
  imageContainer.style.width = totalWidth * 2 + "px";
  imageContainer.style.animationDuration = scrollDuration + "ms";
});
