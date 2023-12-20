const currentYear = new Date().getFullYear();
const yearEl = document.querySelector(".year");
yearEl.textContent = currentYear;

// const pic = document.querySelector(".picture-img");
// let n = 1;
// setInterval(function () {
//   pic.src = `/img/hero${n}.webp`;
//   if (n === 4) {
//     n = 1;
//   } else {
//     n++;
//   }
// }, 5 * 1000);
