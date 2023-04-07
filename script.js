document.querySelector(".loader").classList.add("hide-image-preview");
document.querySelector("#logo-img").classList.add("hide-image-preview");
document
  .querySelector(".loader-image-upload")
  .classList.add("hide-image-preview");

function changeColor(colorCode, color) {
  document.querySelector(".color-swatch .active").classList.remove("active");
  document.querySelector(`.${color}-swatch`).classList.add("active");
  document.body.style.transition = ".4s linear";
  document.body.style.backgroundColor = `${colorCode}`;

  if (color === "pink") {
    document.querySelector(
      "#umbrella-img"
    ).src = `./Assets/${color}umbrella.png`;
    document.querySelector(".pink-swatch").classList.add("colorFocus");
    document.querySelector(".blue-swatch").classList.remove("colorFocus");
    document.querySelector(".yellow-swatch").classList.add("colorFocus");
    document.querySelector(".uploadButton").classList.add("buttonBgPinkColor");
    document
      .querySelector(".uploadButton")
      .classList.remove("buttonBgBlueColor");
    document
      .querySelector(".uploadButton")
      .classList.remove("buttonBgYellowColor");

    document.querySelector(".loader").classList.remove("hide-image-preview");
    document
      .querySelector(".umbrella-preview")
      .classList.add("hide-image-preview");

    setTimeout(function () {
      document.querySelector(".loader").classList.add("hide-image-preview");
      document
        .querySelector(".umbrella-preview")
        .classList.remove("hide-image-preview");
    }, 2000);
  } else if (color === "blue") {
    document.querySelector(
      "#umbrella-img"
    ).src = `./Assets/${color}umbrella.png`;
    document.querySelector(".pink-swatch").classList.remove("colorFocus");
    document.querySelector(".blue-swatch").classList.add("colorFocus");
    document.querySelector(".yellow-swatch").classList.remove("colorFocus");
    document
      .querySelector(".uploadButton")
      .classList.remove("buttonBgPinkColor");
    document.querySelector(".uploadButton").classList.add("buttonBgBlueColor");
    document
      .querySelector(".uploadButton")
      .classList.remove("buttonBgYellowColor");

    document.querySelector(".loader").classList.remove("hide-image-preview");
    document
      .querySelector(".umbrella-preview")
      .classList.add("hide-image-preview");

    setTimeout(function () {
      document.querySelector(".loader").classList.add("hide-image-preview");
      document
        .querySelector(".umbrella-preview")
        .classList.remove("hide-image-preview");
    }, 2000);
  } else if (color === "yellow") {
    document.querySelector(
      "#umbrella-img"
    ).src = `./Assets/${color}umbrella.png`;
    document.querySelector(".pink-swatch").classList.remove("colorFocus");
    document.querySelector(".blue-swatch").classList.remove("colorFocus");
    document.querySelector(".yellow-swatch").classList.add("colorFocus");
    document
      .querySelector(".uploadButton")
      .classList.remove("buttonBgPinkColor");
    document
      .querySelector(".uploadButton")
      .classList.remove("buttonBgBlueColor");
    document
      .querySelector(".uploadButton")
      .classList.add("buttonBgYellowColor");

    document.querySelector(".loader").classList.remove("hide-image-preview");
    document
      .querySelector(".umbrella-preview")
      .classList.add("hide-image-preview");

    setTimeout(function () {
      document.querySelector(".loader").classList.add("hide-image-preview");
      document
        .querySelector(".umbrella-preview")
        .classList.remove("hide-image-preview");
    }, 2000);
  }
}
function previewLogo(event) {
  document.querySelector("#logo-img").classList.remove("hide-image-preview");
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    document.querySelector("#logo-img").src = reader.result;
    const element = document.getElementById("upload-logo-label");
    element.innerHTML = file.name;
    const para = document.getElementById("empty-p-tag");
    para.innerText = "Close";
  };
  document.querySelector(".loader").classList.remove("hide-image-preview");
  document
    .querySelector(".umbrella-preview")
    .classList.add("hide-image-preview");
  document
    .querySelector(".loader-image-upload")
    .classList.remove("hide-image-preview");

  document
    .querySelector(".default-image-upload")
    .classList.add("hide-image-preview");
  setTimeout(function () {
    document.querySelector(".loader").classList.add("hide-image-preview");
    document
      .querySelector(".umbrella-preview")
      .classList.remove("hide-image-preview");
    document
      .querySelector(".loader-image-upload")
      .classList.add("hide-image-preview");
    document
      .querySelector(".default-image-upload")
      .classList.remove("hide-image-preview");
  }, 2000);
}
function clearSrc() {
  document.querySelector("#logo-img").classList.add("hide-image-preview");
  const para = document.getElementById("empty-p-tag");
  para.innerText = "";
  const element = document.getElementById("upload-logo-label");
  element.innerHTML = "Upload logo";
  document.querySelector(".loader").classList.remove("hide-image-preview");
  document
    .querySelector(".umbrella-preview")
    .classList.add("hide-image-preview");
    document
    .querySelector(".loader-image-upload")
    .classList.remove("hide-image-preview");

  document
    .querySelector(".default-image-upload")
    .classList.add("hide-image-preview");
  setTimeout(function () {
    document.querySelector(".loader").classList.add("hide-image-preview");
    document
      .querySelector(".umbrella-preview")
      .classList.remove("hide-image-preview");
      document
      .querySelector(".loader-image-upload")
      .classList.add("hide-image-preview");
    document
      .querySelector(".default-image-upload")
      .classList.remove("hide-image-preview");
  }, 2000);
}
