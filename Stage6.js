phina.define('Stage6', {
  superClass: 'MainScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });

    var pushblock2 = PushBlock(19,14.2,1.5,1.5,0,1,0,3).addChildTo(PushBlockGroup);

    var pushblock2 = PushBlock(22.2,24.2,1.5,1.5,0,-1,0,3).addChildTo(PushBlockGroup);
    var pushblock2 = PushBlock(19.3,34.2,1.5,1.5,0,1,0,3).addChildTo(PushBlockGroup);

    var pushblock2 = PushBlock(16.5,45.2,1.5,1.5,0,1,0,3).addChildTo(PushBlockGroup);


    var block = Block(5,5,12,0.2,0.15).addChildTo(BlockGroup);
    var block = Block(5,60,12,0.2,0).addChildTo(BlockGroup);

    var block = Block(36,60,12,0.2,0).addChildTo(BlockGroup);

    var block = Block(24,55,0.2,5,0).addChildTo(BlockGroup);
    var block = Block(17,55,0.2,5,0).addChildTo(BlockGroup);







    //外枠
    var block3 = Block(0,32,0.3,32,0).addChildTo(BlockGroup);
    var block4 = Block(46,32,0.3,32,0).addChildTo(BlockGroup);
    var block5 = Block(28,0,18,0.3,0).addChildTo(BlockGroup);
    var block6 = Block(0,0,4,0.3,0).addChildTo(BlockGroup);

  },



});
