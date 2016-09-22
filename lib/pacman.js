(function () { if (typeof Game === "undefined") { window.Game = {}; }

  var Pacman = window.Game.Pacman = function () {
    this.$node = $('<div class="pac" dir="right"></div>');
    $('body').append(this.$node);
  }

  Game.Utils.inherits(Pacman, Game.Entity);


})();
