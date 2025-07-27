phina.define('Stage10', {
  superClass: 'MainScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });

    var pushblock1 = PushBlock(3,8,1.5,1.5,0,1,0,3).addChildTo(PushBlockGroup);
    var pushblock1 = PushBlock(32,8,1.5,2,0,0,-1,3).addChildTo(PushBlockGroup);
    var pushblock1 = PushBlock(25,29,3.5,1.5,0,0,-1,6).addChildTo(PushBlockGroup);


    var block = Block(40,28,0.2,12,0).addChildTo(BlockGroup);

    var block = Block(12,10,18,0.2,0).addChildTo(BlockGroup);
    var block = Block(45,40,5,0.2,0).addChildTo(BlockGroup);

    var block = Block(34.3,22,8,0.2,-0.8).addChildTo(BlockGroup);
    var block = Block(15.5,33.5,8,0.2,-0.8).addChildTo(BlockGroup);

    var block = Block(7,16,8,0.2,0.5).addChildTo(BlockGroup);

    var block = Block(33,44,5,0.2,0.5).addChildTo(BlockGroup);

    var block = Block(17.3,55,20,0.2,0).addChildTo(BlockGroup);
    var block = Block(10.1,47,0.2,8.2,0).addChildTo(BlockGroup);
    var block = Block(37.5,55.5,0.2,9.2,0).addChildTo(BlockGroup);




    //外枠
    var block3 = Block(0,32,0.3,32,0).addChildTo(BlockGroup);
    var block4 = Block(46,32,0.3,32,0).addChildTo(BlockGroup);
    var block5 = Block(28,0,18,0.3,0).addChildTo(BlockGroup);
    var block6 = Block(0,0,4,0.3,0).addChildTo(BlockGroup);

  },



});
