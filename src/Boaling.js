var Bowling =function() {
};

Bowling.prototype.result = function(score) {
  var gameTotal = 0;
  var frameTotal;
  var strike = [];
  var spare = [];

  for (var i = 0; i < score.length; i++) {
    frameTotal = this.frameResult(score[i]);

    if (strike[(i - 2)] && strike[(i - 1)]) {
      frameTotal *= 3;
    } else if (strike[(i - 1)]) {
      frameTotal *= 2;
    } else if (spare[(i - 1)]) {
      frameTotal += score[i][0];
    }

    if (score[i][0] == 10) {
      strike[i] = true;
    } else if (frameTotal == 10) {
      spare[i] = true;
    }
    gameTotal += frameTotal;
  }
  return gameTotal;
};

Bowling.prototype.frameResult = function(score) {
  var frameTotal = 0;
  for (var i = 0; i < score.length; i++) {
    frameTotal += score[i];
  }
  return frameTotal;
};
