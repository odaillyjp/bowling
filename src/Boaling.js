var Bowling =function() {
};

Bowling.prototype.result = function(score) {
  var gameTotal = 0;
  var freamTotal;
  var strike = false;
  var spare = false;

  for (var i = 0; i < score.length; i++) {
    freamTotal = 0;
    for (var j = 0; j < score[i].length; j++) {
      freamTotal += score[i][j];
    }

    if (strike) {
      freamTotal *= 2;
      strike = false;
    } else if (spare) {
      freamTotal += score[i][0];
      spare = false;
    }

    if (score[i][0] == 10) {
      strike = true;
    } else if (freamTotal == 10) {
      spare = true;
    }
    gameTotal += freamTotal;
  }
  return gameTotal;
};
