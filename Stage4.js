phina.define('Stage4', {
  superClass: 'MainScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });

    var pushblock = PushBlock(24,39,2,8,0,0,-1,10).addChildTo(PushBlockGroup);


    var block = Block(5,10,32,0.2,0.3).addChildTo(BlockGroup);
    var block = Block(40,25,15,0.2,-0.4).addChildTo(BlockGroup);
    var block = Block(17.5,34,4.5,0.2,-0.4).addChildTo(BlockGroup);

    var block = Block(11.5,31,0.2,5,-0.4).addChildTo(BlockGroup);

    var block = Block(10,40,13,0.2,0.5).addChildTo(BlockGroup);


    var block = Block(27,64,0.2,13,0).addChildTo(BlockGroup);

    var block = Block(0,60,27,0.2,0).addChildTo(BlockGroup);













    //外枠
    var block3 = Block(0,32,0.3,32,0).addChildTo(BlockGroup);
    var block4 = Block(46,32,0.3,32,0).addChildTo(BlockGroup);
    var block5 = Block(28,0,18,0.3,0).addChildTo(BlockGroup);
    var block6 = Block(0,0,4,0.3,0).addChildTo(BlockGroup);

  },



});
