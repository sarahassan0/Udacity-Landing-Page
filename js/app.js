/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

// build the navigation menu list item

const navigationBar = document.getElementById(`navbar__list`);
const sections = document.querySelectorAll(`section`);
const menuLink = document.querySelectorAll(`menu__link`);
// creating the nagivation sections
for (section of sections) {
  sectionsList = document.createElement(`li`);
  mySectionNameIs = section.getAttribute(`data-nav`);
  mySectionIdIs = section.getAttribute(`id`);

  sectionsList.innerHTML = `<a class="menu__link" href ="#${mySectionIdIs}">${mySectionNameIs} </a>`;

  navigationBar.appendChild(sectionsList);
}

// adding the active state when viewing the section and while scrolling through the page.

window.onscroll = function (activClass) {
  for (section of sections) {
    if (
      section.getBoundingClientRect().top <= 200 &&
      section.getBoundingClientRect().top >= -350
    ) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  }
};

/* scrolling to section in link click */

const navLinks = document.querySelectorAll(`.menu__link`);

navLinks.forEach((link) => {
  console.log(link);
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const id = event.target.getAttribute(`href`).substr(1);
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  });
});
