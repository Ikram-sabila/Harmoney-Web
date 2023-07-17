// Toggle menu icon and menu items
var menuIcon = document.querySelector('.menu-icon');
var menu = document.querySelector('.menu');

menuIcon.addEventListener('click', function () {
  menu.classList.toggle('showing');
});

// Change navbar background on scroll
window.addEventListener('scroll', function () {
  var navbar = document.querySelector('nav');
  navbar.classList.toggle('black', window.scrollY > 0);
});

let layananAktif = 1;
  const totalLayanan = $(".layanan").length;

  function geserLayanan(arah) {
    if (arah === "kiri") {
      layananAktif = layananAktif === 1 ? totalLayanan : layananAktif - 1;
    } else if (arah === "kanan") {
      layananAktif = layananAktif === totalLayanan ? 1 : layananAktif + 1;
    }

    $(".layanan").hide();
    $("#layanan" + layananAktif).fadeIn();
  }


