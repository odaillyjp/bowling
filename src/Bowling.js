// (function() {
 function Bowling() {}
 Bowling.prototype = {
   result: function(frames) {
     var total = 0;
     var myself = this;
     frames.push([0])
     frames.forEach(function(frame, idx) {
       frame.forEach(function(score) { total += score; });
       if (idx >= 9) { return; }
       if (myself._isSpare(frame)) { total += frames[idx+1][0]; }
       if (myself._isStrike(frame)) {
         total += frames[idx+1][0]
         if (frames[idx+1].length >= 2) { total += frames[idx+1][1]; }
         if (myself._isStrike(frames[idx+1])) { total += frames[idx+2][0]; }
       }
     });
     return total;
   },

   _isSpare: function(frame) {
     return (frame[0] != 10) && (frame[0] + frame[1] == 10);
   },

   _isStrike: function(frame) {
     return (frame[0] == 10);
   }
 }
// })();
