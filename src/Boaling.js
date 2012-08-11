var Bowling =function() {};

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

    strike[i] = this.isStrike(score[i]);
    spare[i] = this.isSpare(score[i]);
    gameTotal += frameTotal;
  }
  return gameTotal;
};

Bowling.prototype.frameResult = function(score) {
  var frameTotal = 0;
  for (var i = 0; i < score.length; i++) {
    frameTotal += score[i];
  }

  if ((score.length == 3) && ((isStrike(score)) || (isSpare(score)))) {
    if (strike[(i - 2)] && strike[(i - 1)]) {
      frameTotal *= 3;
    } else if (strike[(i - 1)]) {
      frameTotal *= 2;
    } else if (spare[(i - 1)]) {
      frameTotal += score[i][0];
    }
  }
  return frameTotal;
};

Bowling.prototype.isStrike = function(score) {
  var strikeFlag = false;
  if (score[0] == 10) { strikeFlag = true; }
  return strikeFlag;
};

Bowling.prototype.isSpare = function(score) {
  var spareFlag = false;
  if ((score[0] + score[1]) == 10) { spareFlag = true; }
  return spareFlag;
};
