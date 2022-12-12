$("document").ready(function () {

  $(".drop_down").click(function (e) {

    let clicked = e.target;

    if (clicked.offsetParent.childNodes[3].className === "drop_down_content") {

      let list = clicked.offsetParent.childNodes[3];

      $(list).slideToggle();

    }

  });

  $(".hamburger").click( function () {
    $(".nav_right").toggleClass("open");
  });

});
