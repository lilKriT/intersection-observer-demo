const sectionOne = document.querySelector(".one");
const sections = document.querySelectorAll("section");

const options = {
  root: null, // this means the viewport
  threshold: 0.25, // 0 to 1
  rootMargin: "0px",
};

// Requires callback and options
// Callback requires entries and observer
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    // console.log(entry.target);
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.toggle("inverse");
    observer.unobserve(entry.target);
  });
}, options);

// Making it work
// observer.observe(sectionOne);

sections.forEach((section) => {
  observer.observe(section);
});
