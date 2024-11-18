$(document).ready(function () {
  let top = $(document).scrollTop();
  // Menu
  $(".header__burger").click(function (e) {
    $(this).toggleClass("active");
    $(".header__nav").toggleClass("active");
    $(".bg-dark").toggleClass("active");
    $("body").toggleClass("lock");

    e.preventDefault();
    e.stopPropagation();
  });
  $(".header__nav").click(function (e) {
    e.stopPropagation();
  });
  $(document).click(function (e) {
    if (e.target != $(".header__nav") && e.target != $(".header__burger")) {
      $(".header__burger").removeClass("active");
      $(".header__nav").removeClass("active");
      $(".bg-dark").removeClass("active");
      $("body").removeClass("lock");
    }
  });
  // Slider
  $(".main-block").slick({
    arrows: false,
    dots: false,
    autoplay: true,
    fade: true,
  });
  // Tab
  $(".portfolio__tabs a").each(function () {
    $(this).click(function (e) {
      const tabHref = $(this).attr("href");
      $(".portfolio__tabs a").removeClass("active");
      $(this).addClass("active");
      $(".portfolio__item").removeClass("active");
      $(tabHref).addClass("active");
      e.preventDefault();
    });
  });
  // Fixed header
  function fixedHeader(top) {
    if (top > $(window).height()) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
      console.log("1");
    }
  }
  fixedHeader(top);
  $(window).scroll(function () {
    top = $(document).scrollTop();
    fixedHeader(top);
  });
});
