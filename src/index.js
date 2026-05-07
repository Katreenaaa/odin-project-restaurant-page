import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";
import "./styles.css";

function clearContent() {
  document.getElementById("content").innerHTML = "";
}

function setActive(button) {
  document
    .querySelectorAll(".nav-btn")
    .forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
}

// Load default page
loadHome();

// Buttons
const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const contactBtn = document.getElementById("contactBtn");

homeBtn.addEventListener("click", () => {
  clearContent();
  loadHome();
  setActive(homeBtn);
});

menuBtn.addEventListener("click", () => {
  clearContent();
  loadMenu();
  setActive(menuBtn);
});

contactBtn.addEventListener("click", () => {
  clearContent();
  loadContact();
  setActive(contactBtn);
});
