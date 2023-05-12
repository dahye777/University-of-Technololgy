// gnb
$("#gnb>li").hover(
  function () {
    $(".bgGnb, .sub").stop().slideDown();
  },
  function () {
    $(".bgGnb, .sub").stop().slideUp();
  }
);

//popup
$(".notice>.content>ul>li")
  .eq(0)
  .on("click", function () {
    $(".popup, .popupBg").show();
  });
$("#close").on("click", function () {
  $(".popup, .popupBg").hide();
});

// slide
setInterval(function () {
  $(".frame").animate({ left: "-1200px" }, function () {
    $(".frame>li").eq(0).appendTo(".frame");
    $(".frame").css({ left: 0 });
  });
}, 3000);
$(".notice>.content>ul>li")
  .eq(e)
  .on("click", function () {
    $(".popup .popupBg").slow();
  });
$("#close").on("click", function () {
  $(".popup .popupBg").hide();
});
// gallery mouseover
$(".gallery>.content>a>img").css({ opacity: "0.6" });
$(".gallery>.content>a").hover(
  function () {
    $(this).children("img").css("opacity", "1");
  },
  function () {
    $(this).children("img").css("opacity", "0.6");
  }
);
