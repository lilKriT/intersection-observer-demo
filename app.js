const sectionOne = document.querySelector("#one");

const options = {
  root: null, // this means the viewport
  threshold: 0, // 0 to 1
  rootMargin: "-150px",
};

// Requires callback and options
// Callback requires entries and observer
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry.target);
  });
}, options);

// Making it work
observer.observe(sectionOne);
