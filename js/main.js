$(document).ready(function () {
  $(window).scroll(FixedAlarm);
  $(".alarm__closeButton").on("click", function () {
    $(".alarm").css({ display: "none" });
  });

  $(window).resize(function () {
    Adapt();
  });
  Adapt();
});

function FixedAlarm() {
  var $alarm = $(".alarm");
  if ($(window).scrollTop() > 40)
    $alarm.css({
      position: "fixed",
      top: "0px",
    });
  else
    $alarm.css({
      position: "relative",
    });
}

function Adapt() {
  if ($(window).width() < "1220" || $(window).height() > $(window).width()) {
    $(".mainContent").prepend($(".aside__searchBlogContainer"));

    $(".footerContainer").append($(".footer__about"));
  }
}
