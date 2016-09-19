(function () { if (typeof Game === "undefined") { window.Game = {}; }

  var Entity = window.Game.Entity = function () {

  }

  Entity.prototype.top = function () {
    return this.$node.position().top;
  };

  Entity.prototype.left = function () {
    return this.$node.position().left;
  };

})();
