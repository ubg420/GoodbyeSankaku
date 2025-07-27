phina.define('EndScene', {
  superClass: 'DisplayScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });
    this.backgroundColor = '#FFF';



      // ラベルを表示
      this.titlelabel = Label('さ').addChildTo(this);
      this.titlelabel.fontFamily= 'Yu Mincho'
      this.titlelabel.setPosition(this.gridX.center(-3),this.gridY.center(-6));
      this.titlelabel.fill = '#6BBED5'; // 色を変更
      this.titlelabel.strokeWidth = 8;
      this.titlelabel.fontSize = 160; // フォントサイズを変更
      this.titlelabel.alpha = 0; // フォントサイズを変更
      this.titlelabel.rotation = 10; // フォントサイズを変更
      this.titlelabel.tweener
      .clear()
      .wait(500)
      .to({alpha:0.8}, 3000)
      .to({alpha:0}, 1000);


      var label2

      // ラベルを表示
      label2 = Label('よ').addChildTo(this);
      label2.fontFamily= 'Yu Mincho'
      label2.setPosition(this.gridX.center(2),this.gridY.center(-3));
      label2.fill = '#6BBED5'; // 色を変更
      label2.strokeWidth = 8;
      label2.fontSize = 160; // フォントサイズを変更
      label2.alpha = 0; // フォントサイズを変更
      label2.rotation = 10; // フォントサイズを変更

      label2.tweener
      .clear()
      .wait(1000)
      .to({alpha:0.8}, 3000)
      .to({alpha:0}, 1000);


      // ラベルを表示
      label2 = Label('な').addChildTo(this);
      label2.fontFamily= 'Yu Mincho'
      label2.setPosition(this.gridX.center(-2),this.gridY.center(0));
      label2.fill = '#6BBED5'; // 色を変更
      label2.strokeWidth = 8;
      label2.fontSize = 160; // フォントサイズを変更
      label2.alpha = 0; // フォントサイズを変更
      label2.rotation = -20; // フォントサイズを変更
      label2.tweener
      .clear()
      .wait(1500)
      .to({alpha:0.8}, 3000)
      .to({alpha:0}, 1000);


      var self = this;

      // ラベルを表示
      label2 = Label('ら').addChildTo(this);
      label2.fontFamily= 'Yu Mincho';
      label2.setPosition(this.gridX.center(3),this.gridY.center(3));
      label2.fill = '#6BBED5'; // 色を変更
      label2.strokeWidth = 8;
      label2.fontSize = 160; // フォントサイズを変更
      label2.alpha = 0; // フォントサイズを変更
      label2.tweener
      .clear()
      .wait(2000)
      .to({alpha:0.8}, 3000)
      .to({alpha:0}, 1000)
      .call(function(){
          var result = Result(self).addChildTo(self);



      });






      this.sankaku = TriangleShape().addChildTo(this);
      this.sankaku.radius = 70;
      this.sankaku.setPosition(this.gridX.center(),this.gridY.center(-8));
      this.sankaku.fill = "#64C99B";
      this.sankaku.strokeWidth = 0;

      this.sankaku.tweener
      .clear()
      .to({y:SCREEN_HEIGHT + 100,rotation:360}, 5000);



    this.StartFLG = false;

    this.flg = false;
  },

  update: function(app){
  },


});
