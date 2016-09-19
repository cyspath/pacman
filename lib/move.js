$(document).ready(function() {
  $(document).bind('keydown', function(e) {
    left = 37, up = 38, right = 39, down = 40

    if (e.keyCode == left) {
      move('left', 0, pac.left() * 5, pac.$node)
    } else if (e.keyCode == up) {
      move('top', 0, pac.top() * 5, pac.$node)
    } else if (e.keyCode == right) {
      move('left', 500, (500 - pac.left()) * 5, pac.$node)
    } else if (e.keyCode == down) {
      move('top', 500, (500 - pac.top()) * 5, pac.$node)
    }
  });

  function move(direction, distance, speed, $node) {
    $node.stop();
    // direction is 'top' or 'left', speed is '+=n' pr '-=n', $node is jquery obj
    if (direction == 'left') {
      $node.animate({ 'left': distance }, speed);
    } else {
      $node.animate({ 'top': distance }, speed);
    }
  }

})
