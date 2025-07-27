phina.define('TitleScene', {
  superClass: 'DisplayScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });
    this.backgroundColor = '#FFF';



      // ラベルを表示
      this.titlelabel = Label('さよなら三角').addChildTo(this);
      this.titlelabel.fontFamily= 'Yu Mincho'

      this.titlelabel.setPosition(this.gridX.center(0),this.gridY.center(-6));
      this.titlelabel.fill = '#6BBED5'; // 色を変更
      this.titlelabel.strokeWidth = 8;
      this.titlelabel.fontSize = 64; // フォントサイズを変更

      this.sankaku = TriangleShape().addChildTo(this);
      this.sankaku.radius = 50;
      this.sankaku.setPosition(this.gridX.center(),this.gridY.center());
      this.sankaku.fill = "#64C99B";
      this.sankaku.strokeWidth = 0;


      this.startlabel = Label('スタート').addChildTo(this);
      this.startlabel.fontFamily= 'Yu Mincho'
      this.startlabel.fill = "#7379AE";


      this.startlabel.fontSize = 44; // フォントサイズを変更
      this.startlabel.setPosition(this.gridX.center(0),this.gridY.center(6));



    this.StartFLG = false;

    this.flg = false;
  },

  update: function(app){
    this.sankaku.rotation++;
  },

  onpointend: function(){

    if(!this.StartFLG){
      this.Start();
      this.StartFLG = true;

      //Debug
      //this.exit();
      //
    }
  },

  Start: function(){
    this.exit();
  },

});
