// Icon feater
feather.replace();

// AOS
AOS.init();

// Nav Scroll ga berfungsi
window.addEventListener("scroll", function () {
  var nav = this.document.querySelector("nav");
  nav.classList.toggle("bg-white/80", window.scrollY > 0);
});

// Hamburger Toggle
// const hamburger = document.querySelector('#hamburger');

// hamburger.addEventListener('click', function () {
//     hamburger.classList.toggle('hamburger-active');
// });

// Auto typed
var typed = new Typed(".auto-type-1", {
  // strings : ['UI/UX Design', 'Front End', 'Product Management'],
  strings: ["UI/UX Design", "Product Management"],
  typeSpeed: 150,
  backSpeed: 50,
  loop: true,
});

var typed = new Typed(".auto-type", {
  // strings : ['UI/UX Design', 'Front End', 'Product Management'],
  strings: ["Maintance", "Coming Soon"],
  typeSpeed: 150,
  backSpeed: 50,
  loop: true,
});




// preload
// onload = function () {
//     let preload = document.getElementById ("preload")
//     let loading = document.createElement ("div")

// }
