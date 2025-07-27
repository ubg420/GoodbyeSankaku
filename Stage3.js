phina.define('Stage3', {
  superClass: 'MainScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });



    var block = Block(5,10,32,0.2,0.2).addChildTo(BlockGroup);
    var pushblock2 = PushBlock(43,20,1.5,1.5,0,-1,0,3).addChildTo(PushBlockGroup);
    var block = Block(5,20,22,0.2,0.2).addChildTo(BlockGroup);


    var block = Block(30,20,22,0.2,0.2).addChildTo(BlockGroup);

    var block = Block(30,20,22,0.2,0.2).addChildTo(BlockGroup);
    var pushblock2 = PushBlock(43,30.2,1.5,1.5,0,-1,0,3).addChildTo(PushBlockGroup);
    var block = Block(30,30,22,0.2,0.2).addChildTo(BlockGroup);

    var block = Block(5,40,32,0.2,0.4).addChildTo(BlockGroup);












    //外枠
    var block3 = Block(0,32,0.3,32,0).addChildTo(BlockGroup);
    var block4 = Block(46,32,0.3,32,0).addChildTo(BlockGroup);
    var block5 = Block(28,0,18,0.3,0).addChildTo(BlockGroup);
    var block6 = Block(0,0,4,0.3,0).addChildTo(BlockGroup);


    var arrow = Sprite('arrow').addChildTo(this);
    arrow.setPosition(this.gridX.center(6),this.gridY.center(7));
    arrow.setSize(80, 80);
    arrow.rotation = 90;

  },



});
