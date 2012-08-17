function Bowling() {
  this.totalScore = 0;
  this.strike = [];
  this.spare = [];
};

Bowling.prototype = {
  result : function(score) {
    var frameTotal = 0;
    var bonusScore = 0;

    for (var i = 0; i < score.length; i++) {
      frameTotal = this._frameResult(score[i]);
      this.strike[i] = this._isStrike(score[i]);
      this.spare[i] = this._isSpare(score[i]);
      if (this.strike[9]) {
        this.strike[10] = this._isStrike(score[9].slice(1));
        this.spare[10] = this._isStrike(score[9].slice(1));
      } else if (this.spare[9]) {
        this.strike[10] = this._isStrike(score[9].slice(2));
        this.spare[10] = false;
      }

      bonusScore = this._getBonusScore(i,score,frameTotal);
      this.totalScore += (frameTotal + bonusScore);
    }
    return this.totalScore;
  },

  // Private method
  _frameResult : function(score) {
    var frameTotal = 0;
    for (var i = 0; i < score.length; i++) {
      frameTotal += score[i];
    }
    return frameTotal;
  },

  _getBonusScore : function(frame,score,frameTotal) {
    var bonusScore = 0;
    if (this.strike[(frame - 2)] && this.strike[(frame - 1)]) {
      if (this.strike[9] && this.strike[10]) {
        bonusScore = 30;
      } else if (this.strike[9]) {
        bonusScore = (20 + score[frame][1]);
      } else if (this.spare[9]) {
        bonusScore = (10 + score[frame][0]);
      } else {
        bonusScore = (frameTotal + score[frame][0]);
      }
    } else if (this.strike[(frame - 1)]) {
      if ((this.strike[9]) || (this.strike[10])) {
        bonusScore = 20;
      } else if (this.strike[9]) {
        bonusScore = (10 + score[frame][1]);
      } else if (this.spare[9]) {
        bonusScore = 10;
      } else {
        bonusScore = frameTotal;
      }
    } else if (this.spare[(frame - 1)]) {
      bonusScore = score[frame][0];
    }
    return bonusScore;
  },

  _isStrike : function(score) {
    var strikeFlag = false;
    if (score[0] == 10) { strikeFlag = true; }
    return strikeFlag;
  },

  _isSpare : function(score) {
    var spareFlag = false;
    if ((score[0] != 10) && (score[0] + score[1]) == 10) { spareFlag = true; }
    return spareFlag;
  }
};
