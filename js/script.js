const message = "Merci de nous avoir contacté.";

document.getElementById("contactForm");
addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});
