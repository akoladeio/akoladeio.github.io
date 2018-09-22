(function($) {
  "use strict";
  setInterval(function() {
    var image = new Array();
    var image = [
      "bg01.jpg",
      "bg02.jpg",
      "bg03.jpg",
      "bg04.jpg",
      "bg05.jpg",
      "bg06.jpg",
      "bg07.jpg"
    ];
    var size = image.length;
    var x = Math.floor(size * Math.random());
    $("#random").css("background-image", "url(images/" + image[x] + ")");
  }, 2500);
})(jQuery);
