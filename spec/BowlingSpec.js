describe('ボウリング',function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('20回全部ガターを投げてトータル0', function() {
    var score = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];

    expect(bowling.result(score)).toBe(0);
  });

  it('20回全部1ピン倒してトータル20', function() {
    var score = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];

    expect(bowling.result(score)).toBe(20);
  });

  it('スペアが1回で残りが1ピン倒しの場合トータル29', function() {
    var score = [[9,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];

    expect(bowling.result(score)).toBe(29);
  });

  it('ストライクが1回で残りが1ピン倒しの場合トータル30', function() {
    var score = [[10],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];

    expect(bowling.result(score)).toBe(30);
  });

  it('パーフェクトゲーム!', function() {
    var score = [[10],[10],[10],[10],[10],[10],[10],[10],[10],[10,10,10]]

    expect(bowling.result(score)).toBe(300);
  });
});
