phina.define('Stage12', {
  superClass: 'MainScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });

    var pushblock2 = PushBlock(6,8.2,1.5,1.5,0,-1,0,3).addChildTo(PushBlockGroup);
    var pushblock2 = PushBlock(20,38.8,3,1.5,0,0,-1,3).addChildTo(PushBlockGroup);


    var block = Block(6,15,12,0.2,0).addChildTo(BlockGroup);
    var block = Block(47.8,55,39,0.2,0).addChildTo(BlockGroup);

    var block = Block(9,47,0.2,20,0).addChildTo(BlockGroup);


    var block = Block(38,25,3,0.2,-0.8).addChildTo(BlockGroup);







    //外枠
    var block3 = Block(0,32,0.3,32,0).addChildTo(BlockGroup);
    var block4 = Block(46,32,0.3,32,0).addChildTo(BlockGroup);
    var block5 = Block(28,0,18,0.3,0).addChildTo(BlockGroup);
    var block6 = Block(0,0,4,0.3,0).addChildTo(BlockGroup);

  },



});
