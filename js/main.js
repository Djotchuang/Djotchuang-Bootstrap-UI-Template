ScrollReveal({ reset: true, duration: 1500 });

ScrollReveal().reveal(".features .card");
ScrollReveal().reveal(".site-content .d-flex");
ScrollReveal().reveal(".section-2 .d-flex");
ScrollReveal().reveal(".section-3 .col-md-4");
ScrollReveal().reveal(".section-4 .col-md-7, .col-md-5");
ScrollReveal().reveal("#gallery");

// Smooth Scrolling
$(".cf a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      4400,
      function () {
        window.location.hash = hash;
      }
    );
  }
});
