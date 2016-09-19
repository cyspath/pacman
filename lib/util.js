(function () {
  if (typeof Game === "undefined") { window.Game = {}; }
  if (typeof Game.Utils === "undefined") { window.Game.Utils = {}; }

  Game.Utils.inherits = function (ChildClass, ParentClass) {
    function Surrogate() {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  };

})();
