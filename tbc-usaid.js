//  Handele header transparancy

window.addEventListener("scroll", () => {
  const header = document.querySelector(".siteHeader");
  header.classList.toggle("transparent", window.scrollY > 0);
});
// Handle scroll of partners images

const scrollContainer = document.querySelector(".slidesContainer");
const prevBtn = document.querySelector("#prevbtn");
const nextBtn = document.querySelector("#nextbtn");

const prevSlide = () => {
  scrollContainer.scrollLeft <= 0
    ? (scrollContainer.scrollLeft += 2 * scrollContainer.offsetWidth)
    : (scrollContainer.scrollLeft -= scrollContainer.offsetWidth);
};
const nextSlide = () => {
  scrollContainer.clientWidth + scrollContainer.scrollLeft >=
  scrollContainer.scrollWidth
    ? (scrollContainer.scrollLeft -= 2 * scrollContainer.offsetWidth)
    : (scrollContainer.scrollLeft += scrollContainer.offsetWidth);
};

setInterval(() => nextSlide(), 4000);

//  Show and hide answers

const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const downArrow = document.querySelectorAll("#downArrow");

questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    answers[index].classList.toggle("visible");
    downArrow[index].classList.toggle("rotate");
  });
});
//  Mobile sidebar
const navbarMobile = document.querySelector(".navBar");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
close.addEventListener("click", () => {
  navbarMobile.classList.add("hide");
});
open.addEventListener("click", () => {
  navbarMobile.classList.remove("hide");
});
