phina.define('Stage2', {
  superClass: 'MainScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });

    var pushblock = PushBlock(23,40,15.5,2,0,0,-1,5).addChildTo(PushBlockGroup);
    var pushblock2 = PushBlock(3,8.2,1.5,1.5,0,1,0,3).addChildTo(PushBlockGroup);


    var block = Block(5,10,32,0.2,0).addChildTo(BlockGroup);
    var block = Block(42.3,30,0.2,5,0.8).addChildTo(BlockGroup);


    var block = Block(39,50,32,0.2,0).addChildTo(BlockGroup);

    var block = Block(7,43,0.2,25,0).addChildTo(BlockGroup);
    var block = Block(38.8,52.3,0.2,19,0).addChildTo(BlockGroup);









    //外枠
    var block3 = Block(0,32,0.3,32,0).addChildTo(BlockGroup);
    var block4 = Block(46,32,0.3,32,0).addChildTo(BlockGroup);
    var block5 = Block(28,0,18,0.3,0).addChildTo(BlockGroup);
    var block6 = Block(0,0,4,0.3,0).addChildTo(BlockGroup);


    var arrow = Sprite('arrow').addChildTo(this);
    arrow.setPosition(this.gridX.center(-6.5),this.gridY.center(7));
    arrow.setSize(80, 80);
    arrow.rotation = 90;

  },



});
