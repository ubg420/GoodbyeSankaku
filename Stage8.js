phina.define('Stage8', {
  superClass: 'MainScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });

    var pushblock2 = PushBlock(6,8.2,1.5,1.5,0,-1,0,3).addChildTo(PushBlockGroup);
    var pushblock2 = PushBlock(41.3,31.8,1.5,1.5,0,-1,0,3).addChildTo(PushBlockGroup);


    var block = Block(5,30,32,0.2,0).addChildTo(BlockGroup);
    var block = Block(25.7,14.5,12,0.2,0.3).addChildTo(BlockGroup);

    var block = Block(37,24,0.2,6,0).addChildTo(BlockGroup);
    var block = Block(40,8,0.2,22,0).addChildTo(BlockGroup);
    var block = Block(40,55.5,0.2,22,0).addChildTo(BlockGroup);

    var block = Block(27.3,60,22,0.2,0).addChildTo(BlockGroup);

    var block = Block(14,39,9,0.2,0.3).addChildTo(BlockGroup);


    var block = Block(5.5,58.3,0.2,22,0).addChildTo(BlockGroup);







    //外枠
    var block3 = Block(0,32,0.3,32,0).addChildTo(BlockGroup);
    var block4 = Block(46,32,0.3,32,0).addChildTo(BlockGroup);
    var block5 = Block(28,0,18,0.3,0).addChildTo(BlockGroup);
    var block6 = Block(0,0,4,0.3,0).addChildTo(BlockGroup);

  },



});
