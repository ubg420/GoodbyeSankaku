phina.define('Stage5', {
  superClass: 'MainScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });

    var pushblock = PushBlock(27,22.8,1.8,3,0,0,-1,5).addChildTo(PushBlockGroup);
    var pushblock2 = PushBlock(3,18,1.5,1.5,0,1,0,3).addChildTo(PushBlockGroup);



    var block = Block(5,20,20,0.2,0).addChildTo(BlockGroup);
    var block = Block(33,20,4,0.2,0).addChildTo(BlockGroup);

    var pushblock2 = PushBlock(23.5,39.2,1.5,1.5,0,-1,0,3).addChildTo(PushBlockGroup);
    var pushblock2 = PushBlock(3,47.5,1.5,1.5,0,1,0,3).addChildTo(PushBlockGroup);
    var block = Block(20,44,25,0.2,-0.5).addChildTo(BlockGroup);
    var block = Block(43,21,42,0.2,-0.4).addChildTo(BlockGroup);

    var block = Block(0,39,10,0.2,0.4).addChildTo(BlockGroup);

    var block = Block(0,49.6,17.5,0.2,0).addChildTo(BlockGroup);

    var block = Block(37,12.2,0.2,8,0).addChildTo(BlockGroup);







    //外枠
    var block3 = Block(0,32,0.3,32,0).addChildTo(BlockGroup);
    var block4 = Block(46,32,0.3,32,0).addChildTo(BlockGroup);
    var block5 = Block(28,0,18,0.3,0).addChildTo(BlockGroup);
    var block6 = Block(0,0,4,0.3,0).addChildTo(BlockGroup);

  },



});
