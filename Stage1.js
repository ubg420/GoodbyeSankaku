phina.define('Stage1', {
  superClass: 'MainScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });


    var pushblock = PushBlock(3,8.2,1.5,1.5,0,1,0,3).addChildTo(PushBlockGroup);


    STAGECOUNT = 1;

    var block = Block(5,10,11,0.2,0).addChildTo(BlockGroup);


    var block3 = Block(0,32,0.3,32,0).addChildTo(BlockGroup);
    var block4 = Block(46,32,0.3,32,0).addChildTo(BlockGroup);
    var block5 = Block(28,0,18,0.3,0).addChildTo(BlockGroup);
    var block6 = Block(0,0,4,0.3,0).addChildTo(BlockGroup);



    // ラベルを表示
    var label = Label('タッチ').addChildTo(this);
    label.fontFamily= 'Yu Mincho'
    label.setPosition(this.gridX.center(0),this.gridY.center());
    label.fill = '#7379AE'; // 色を変更
    label.strokeWidth = 8;
    label.fontSize = 64; // フォントサイズを変更



    var arrow = Sprite('arrow').addChildTo(this);
    arrow.setPosition(this.gridX.center(6),this.gridY.center(7));
    arrow.setSize(80, 80);
    arrow.rotation = 90;
  },



});
