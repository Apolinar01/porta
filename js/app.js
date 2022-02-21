window.addEventListener("load", () => {
  document.querySelector(".main").classList.remove("hidden"),
    document.querySelector(".home-section").classList.add("active"),
    document.querySelector(".page-loader").classList.add("fade-out"),
    setTimeout(() => {
      document.querySelector(".page-loader").style.display = "none";
    }, 600);
});
const navToggler = document.querySelector(".nav-toggler");
function hideSection() {
  document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar() {
  document.querySelector(".header").classList.toggle("active");
}
function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open"),
    document.body.classList.toggle("hide-scrolling"),
    document.querySelector(".main").classList.toggle("fade-out");
}
function portfolioItemDetails(e) {
  (document.querySelector(".pp-thumbnail img").src = e.querySelector(
    ".portfolio-item-thumbnail img"
  ).src),
    (document.querySelector(".pp-header h3").innerHTML = e.querySelector(
      ".portfolio-item-title"
    ).innerHTML),
    (document.querySelector(".pp-body").innerHTML = e.querySelector(
      ".portfolio-item-details"
    ).innerHTML);
}
navToggler.addEventListener("click", () => {
  hideSection(),
    toggleNavbar(),
    document.body.classList.toggle("hide-scrolling");
}),
  document.addEventListener("click", (e) => {
    e.target.classList.contains("link-item") &&
      "" !== e.target.hash &&
      (document.querySelector(".overlay").classList.add("active"),
      navToggler.classList.add("hide"),
      e.target.classList.contains("nav-item")
        ? toggleNavbar()
        : (hideSection(), document.body.classList.add("hide-scrolling")),
      setTimeout(() => {
        document
          .querySelector("section.active")
          .classList.remove("active", "fade-out"),
          document.querySelector(e.target.hash).classList.add("active"),
          window.scrollTo(0, 0),
          navToggler.classList.remove("hide"),
          document.querySelector(".overlay").classList.remove("active");
      }, 500));
  }),
  document.addEventListener("click", (e) => {
    e.target.classList.contains("view-project-btn") &&
      (togglePortfolioPopup(),
      document.querySelector(".portfolio-popup").scrollTo(0, 0),
      portfolioItemDetails(e.target.parentElement));
  }),
  document
    .querySelector(".pp-close")
    .addEventListener("click", togglePortfolioPopup),
  document.addEventListener("click", (e) => {
    e.target.classList.contains("pp-inner") && togglePortfolioPopup();
  })
;


