var Boaling =function() {
};

Boaling.prototype.throw = function(score) {
	var total = 0;

	for (var i = 0; i < score.length; i++) {
		for (var j = 0; j < score[i].length; j++) {
			total += score[i][j];
		}
	}
	return total;
};

