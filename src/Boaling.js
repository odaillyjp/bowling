var Bowling =function() {
};

Bowling.prototype.result = function(score) {
  var gameTotal = 0;
  var freamTotal;
  var strike = [];
  var spare = [];

  for (var i = 0; i < score.length; i++) {
    freamTotal = 0;
    for (var j = 0; j < score[i].length; j++) {
      freamTotal += score[i][j];
    }

    if (strike[(i - 2)] && strike[(i - 1)]) {
      freamTotal *= 3;
    } else if (strike[(i - 1)]) {
      freamTotal *= 2;
    } else if (spare[(i - 1)]) {
      freamTotal += score[i][0];
    }

    if (score[i][0] == 10) {
      strike[i] = true;
    } else if (freamTotal == 10) {
      spare[i] = true;
    }
    gameTotal += freamTotal;
  }
  return gameTotal;
};
