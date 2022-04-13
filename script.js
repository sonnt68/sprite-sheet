$(document).ready(function () {
  var image = $("img.Character_spritesheet");
  function removeLastClass() {
    var lastClass = image.attr("class").split(" ").pop();
    image.removeClass(lastClass);
  }

  $(this).on("keydown", function (e) {
    const keyAllowedArr = [37, 38, 39, 40, 87, 65, 68, 83];
    if (keyAllowedArr.includes(e.which)) {
      removeLastClass();
      switch (e.which) {
        case 40: //arrow down
          image.addClass("face-down");
          break;
        case 38: //arrow up
          image.addClass("face-up");
          break;
        case 37: //arrow left
          image.addClass("face-left");
          break;
        case 39: //arrow right
          image.addClass("face-right");
          break;
        case 83: //key S
          image.addClass("face-shift-down");
          break;
        case 87: //key W
          image.addClass("face-shift-up");
          break;
        case 65: //key A
          image.addClass("face-shift-left");
          break;
        case 68: //key D
          image.addClass("face-shift-right");
          break;
        default:
          return; // Quit when this doesn't handle the key event.
      }
    }
    return;
  });
});
