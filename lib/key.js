$(document).ready(function() {
  $(document).bind('keydown', function(e) {
    var pac = $("#pac"), left = 37, up = 38, right = 39, down = 40
    pac.stop();
    if (e.keyCode == left) {
    pac.animate({"left": "-=5"}, "fast");
    }
    if (e.keyCode == up) {
        pac.animate({"top": "-=5"}, "fast");

    }
    if (e.keyCode == right) {
        pac.animate({"left": "+=5"}, "fast");

    }
    if (e.keyCode == down) {
        pac.animate({"top": "+=5"}, "fast");

    }
  });

})


function move(direction, speed, $node) {
  console.log('ok');
  // direction is 'top' or 'left', speed is '+=n' pr '-=n', $node is jquery obj
  if (direction == 'left') {
    $node.animate(
      { 'left': speed },
      { duration: "fast",
        complete: function() {
          move('left', speed, $node)
        }
      }
    );
  } else {
    $node.animate({'top': speed}, "fast");
  }
}
