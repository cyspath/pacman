$(document).ready(function() {
  $(document).bind('keydown', function(e) {
    left = 37, up = 38, right = 39, down = 40

    if (e.keyCode == left) {
      changeImg("left", pac.$node);
      move('left', 0, pac.left(), pac.$node);
    } else if (e.keyCode == up) {
      changeImg("up", pac.$node);
      move('top', 0, pac.top(), pac.$node)
    } else if (e.keyCode == right) {
      changeImg("right", pac.$node);
      move('left', 500, (500 - pac.left()), pac.$node)
    } else if (e.keyCode == down) {
      changeImg("down", pac.$node);
      move('top', 500, (500 - pac.top()), pac.$node)
    }
  });

  function move(direction, distance, speed, $node) {
    $node.stop();
    // direction is 'top' or 'left', speed is '+=n' pr '-=n', $node is jquery obj
    if (direction == 'left') {
      $node.animate({ 'left': distance }, speed * 8);
    } else {
      $node.animate({ 'top': distance }, speed * 8);
    }
  }

  function changeImg(direction, $node) {
    $node.attr("dir", direction)
  }

})
