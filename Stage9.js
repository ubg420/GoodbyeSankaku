phina.define('Stage9', {
  superClass: 'MainScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });

    var pushblock1 = PushBlock(3,20,1.5,1.5,0,1,0,3).addChildTo(PushBlockGroup);

    var block = Block(35,68,0.2,32,0).addChildTo(BlockGroup);

    var block = Block(5,50,30,0.2,0).addChildTo(BlockGroup);



    //外枠
    var block3 = Block(0,32,0.3,32,0).addChildTo(BlockGroup);
    var block4 = Block(46,32,0.3,32,0).addChildTo(BlockGroup);
    var block5 = Block(28,0,18,0.3,0).addChildTo(BlockGroup);
    var block6 = Block(0,0,4,0.3,0).addChildTo(BlockGroup);

  },



});
