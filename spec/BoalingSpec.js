describe('ボウリング',function() {
  var boaling = new Boaling();

  it('20回全部ガターを投げてトータル0', function(){
    var score = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];

    expect(boaling.throw(score)).toBe(0);
  });

  it('20回全部1ピン倒してトータル20', function(){
    var score = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];

    expect(boaling.throw(score)).toBe(20);
  });

  it('スペアが1回で残りが1ピン倒しの場合トータル29', function(){
    var score = [[9,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];

    expect(boaling.throw(score)).toBe(29);
  });
});