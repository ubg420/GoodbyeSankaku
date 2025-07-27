phina.define('Stage13', {
  superClass: 'MainScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });

    var pushblock2 = PushBlock(6,8.2,1.5,1.5,0,-1,0,3).addChildTo(PushBlockGroup);
    var pushblock2 = PushBlock(24.4,31.8,1.5,1.5,0,1,0,3).addChildTo(PushBlockGroup);


    var block = Block(11.2,30,12,0.2,0).addChildTo(BlockGroup);
    var block = Block(37.8,30,12,0.2,0).addChildTo(BlockGroup);


    var block = Block(26,24,0.2,6,0).addChildTo(BlockGroup);
    var block = Block(23,24,0.2,6,0).addChildTo(BlockGroup);

    var block = Block(21.8,17.3,1.5,0.2,0.5).addChildTo(BlockGroup);
    var block = Block(27.2,17.3,1.5,0.2,-0.5).addChildTo(BlockGroup);

    var block = Block(20.6,16,0.2,0.8,0).addChildTo(BlockGroup);
    var block = Block(28.4,16,0.2,0.8,0).addChildTo(BlockGroup);



        var block = Block(1.1,60,12,0.2,0).addChildTo(BlockGroup);
        var block = Block(30.8,60,15,0.2,0).addChildTo(BlockGroup);


        var block = Block(16,54,0.2,6,0).addChildTo(BlockGroup);
        var block = Block(13,54,0.2,6,0).addChildTo(BlockGroup);

        var block = Block(11.8,47.3,1.5,0.2,0.5).addChildTo(BlockGroup);
        var block = Block(17.2,47.3,1.5,0.2,-0.5).addChildTo(BlockGroup);

        var block = Block(10.6,46,0.2,0.8,0).addChildTo(BlockGroup);
        var block = Block(18.4,46,0.2,0.8,0).addChildTo(BlockGroup);






    //外枠
    var block3 = Block(0,32,0.3,32,0).addChildTo(BlockGroup);
    var block4 = Block(46,32,0.3,32,0).addChildTo(BlockGroup);
    var block5 = Block(28,0,18,0.3,0).addChildTo(BlockGroup);
    var block6 = Block(0,0,4,0.3,0).addChildTo(BlockGroup);

  },



});
