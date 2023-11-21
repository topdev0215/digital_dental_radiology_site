$(document).ready(function () {
  $(".fa-close").click(function () {
    document.getElementById("search").value = "";
  });
});

const swiper = document.querySelector('.swiper').swiper;

// Now you can use all slider methods like
swiper.start();
