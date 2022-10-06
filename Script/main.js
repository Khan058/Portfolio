let lastScroll = 0;
let header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScroll) {
    header.style.top = "-100px";
  } else {
    header.style.top = "16px";
  }
  lastScroll = scrollTop;
});
