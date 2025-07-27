phina.define('Stage7', {
  superClass: 'MainScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });

    var pushblock1 = PushBlock(3,16,1.5,1.5,0,1,0,3).addChildTo(PushBlockGroup);
    var pushblock1 = PushBlock(44,49,1.5,1.5,0,-1,0,3).addChildTo(PushBlockGroup);
    var pushblock1 = PushBlock(44,45.7,1.5,1.5,0,-1,0,3).addChildTo(PushBlockGroup);


    var block = Block(19,13,13,0.2,-0.4).addChildTo(BlockGroup);
    var block = Block(36,6,2,0.2,-0.4).addChildTo(BlockGroup);


    var block = Block(2,18,5.3,0.2,0).addChildTo(BlockGroup);

    var block = Block(38,13,0.2,8,0).addChildTo(BlockGroup);
    var block = Block(43,21,5.1,0.2,0).addChildTo(BlockGroup);

    var block = Block(43,51,5.1,0.2,0).addChildTo(BlockGroup);
    var block = Block(30,47.5,9,0.2,0.4).addChildTo(BlockGroup);

    var block = Block(13,40,4,0.2,0.4).addChildTo(BlockGroup);

    var block = Block(9.5,55.5,0.2,17,0).addChildTo(BlockGroup);

    var block = Block(31.5,58,22,0.2,0).addChildTo(BlockGroup);






    //外枠
    var block3 = Block(0,32,0.3,32,0).addChildTo(BlockGroup);
    var block4 = Block(46,32,0.3,32,0).addChildTo(BlockGroup);
    var block5 = Block(28,0,18,0.3,0).addChildTo(BlockGroup);
    var block6 = Block(0,0,4,0.3,0).addChildTo(BlockGroup);

  },



});
