var Bowling = function() {};

Bowling.prototype.result = function(score) {
  var gameTotal = 0;
  var frameTotal = 0;
  var scoreBonus = 0;
  var strike = [];
  var spare = [];

  for (var i = 0; i < score.length; i++) {
    frameTotal = this.frameResult(score[i]);
    strike[i] = this.isStrike(score[i]);
    spare[i] = this.isSpare(score[i]);

    if (strike[9]) {
      strike[10] = this.isStrike(score[9].slice(1));
      spare[10] = this.isStrike(score[9].slice(1));
    } else if (spare[9]) {
      strike[10] = this.isStrike(score[9].slice(2));
      spare[10] = false;
    }

    // TODO: scoreBonus を計算するコードをメソッド化する
    scoreBonus = 0;
    if (strike[(i - 2)] && strike[(i - 1)]) {
      // ifネストは邪道!
      if (strike[9] && strike[10]) {
        scoreBonus = 30;
      } else if (strike[9]) {
        scoreBonus = 20 + score[9][1] + score[9][2];
      } else if (spare[9]) {
        scoreBonus = 20 + score[9][2];
      } else {
        scoreBonus = (frameTotal * 2);
      }
    } else if (strike[(i - 1)]) {
      // ifネストは邪道!
      if ((strike[9]) || (strike[10])) {
        scoreBonus = 20;
      } else if (strike[9]) {
        scoreBonus = 10 + score[9][1] + score[9][2];
      } else if (spare[9]) {
        scoreBonus = 10 + score[9][2];
      } else {
        scoreBonus = frameTotal;
      }
    } else if (spare[(i - 1)]) {
      scoreBonus = score[i][0];
    }

    gameTotal += (frameTotal + scoreBonus)
  }
  return gameTotal;
};

// TODO: 以下のメソッドをプライベート化する
Bowling.prototype.frameResult = function(score) {
  var frameTotal = 0;
  for (var i = 0; i < score.length; i++) {
    frameTotal += score[i];
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
  if ((score[0] != 10) && (score[0] + score[1]) == 10) { spareFlag = true; }
  return spareFlag;
};
