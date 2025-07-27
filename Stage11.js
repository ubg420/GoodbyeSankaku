phina.define('Stage11', {
  superClass: 'MainScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });

    var pushblock2 = PushBlock(3.2,53.2,1.5,1.5,0,1,0,3).addChildTo(PushBlockGroup);
    var pushblock2 = PushBlock(22.2,43.2,3,1.5,0,0,-1,3).addChildTo(PushBlockGroup);



    var block = Block(0,55,38,0.2,0).addChildTo(BlockGroup);
    var block = Block(38,45,0.2,30,0).addChildTo(BlockGroup);
    var block = Block(40,5,10,0.2,0.5).addChildTo(BlockGroup);








    //外枠
    var block3 = Block(0,32,0.3,32,0).addChildTo(BlockGroup);
    var block4 = Block(46,32,0.3,32,0).addChildTo(BlockGroup);
    var block5 = Block(28,0,18,0.3,0).addChildTo(BlockGroup);
    var block6 = Block(0,0,4,0.3,0).addChildTo(BlockGroup);

  },



});
