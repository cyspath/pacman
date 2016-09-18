var entity = function () {
  this.$node = $('<div class="entity"></div>');
}

MovingObject.prototype.move = function () {

};

function animateDiv(node){
    var newq = makeNewPosition();
    var oldq = node.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    node.animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv(node);
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}

$(document).ready(function () {
  
})
