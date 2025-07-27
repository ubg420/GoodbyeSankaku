phina.define("Result", {
    superClass: "DisplayElement",
    init: function(scene) {
      this.superInit({
        width: 0,
        height: 0,
      });
      var self = scene;

      this.x = 0;
      this.y = 0;

      this.Rank = this.GetRank();

      var tweet = Sprite('Tweet',200,70).addChildTo(this);

      var url = "http://cachacacha.com/GAME/GoodbyeSankaku/";
      var score = 0;
      this.ResultTxt = "";

      var Tweettxt = encodeURIComponent("さよなら三角 リトライ回数 " + RETRYCOUNT + "回 " + this.Rank + " " + url + "  #さよなら三角 #かちゃコム");

      tweet.x = 350;
      tweet.y = -100;
      tweet.tweener
      .clear()
      .wait(1000)
      .to({y:800}, 1300,"easeOutQuart");
      // タッチ判定を有効に
      tweet.setInteractive(true);
      // タッチ終了時に発火
      tweet.onclick = function() {
        // 自身を削除
        window.open("http://twitter.com/intent/tweet?text=" + Tweettxt);
      };

      var retry = Sprite('Retry',200,70).addChildTo(this);
      retry.x = 610;
      retry.y = -100;

      retry.tweener
      .clear()
      .wait(1100)
      .to({y:800}, 1300,"easeOutQuart");
      // タッチ判定を有効に
      retry.setInteractive(true);
      // タッチ終了時に発火
      retry.onclick = function() {
        // 自身を削除

          RETRYCOUNT = 0;
          self.exit("Stage1");

      };


      var logo = Sprite('Logo').addChildTo(this);
      logo.x =1100;
      logo.y = 1000;
      logo.tweener
      .clear()
      .wait(1700)
      .to({x:self.gridX.center()}, 1300,"easeOutQuart");
      // タッチ判定を有効に
      logo.setInteractive(true);
      // タッチ終了時に発火
      logo.onclick = function() {
        // 自身を削除
        window.open("http://www.cachacacha.com/");
      };



      var rl1 = Label('リトライ回数').addChildTo(this);
      rl1.fontFamily= 'Yu Mincho';
      rl1.setPosition(self.gridX.center(11),self.gridY.center(-5));
      rl1.fill = '#7379AE'; // 色を変更
      rl1.strokeWidth = 8;
      rl1.fontSize = 80; // フォントサイズを変更
      rl1.tweener
      .clear()
      .to({x:self.gridX.center()}, 1000,"easeOutQuart");

      var rl2 = Label(RETRYCOUNT).addChildTo(this);
      rl2.fontFamily= 'Yu Mincho';
      rl2.setPosition(self.gridX.center(11),self.gridY.center(-3));
      rl2.fill = '#7379AE'; // 色を変更
      rl2.strokeWidth = 8;
      rl2.fontSize = 180; // フォントサイズを変更

      var rl3 = Label(this.Rank).addChildTo(this);
      rl3.fontFamily= 'Yu Mincho';
      rl3.setPosition(self.gridX.center(15),self.gridY.center(-1));
      rl3.fill = '#7379AE'; // 色を変更
      rl3.strokeWidth = 8;
      rl3.fontSize = 70; // フォントサイズを変更

      rl2.tweener
      .clear()
      .wait(200)
      .to({x:self.gridX.center()}, 1000,"easeOutQuart");


      rl3.tweener
      .clear()
      .wait(400)
      .to({x:self.gridX.center()}, 1000,"easeOutQuart");




    },

    update: function(app) {

    },


    GetRank: function() {

      var rank = "さよなら詐欺"

      if(RETRYCOUNT < 300){
        rank = "ぎこちないさよなら";
      }
      if(RETRYCOUNT < 200){
        rank = "ほどほどのさよなら";
      }
      if(RETRYCOUNT < 150){
        rank = "無難なさよなら";
      }
      if(RETRYCOUNT < 100){
        rank = "さよなら上手";
      }
      if(RETRYCOUNT < 70){
        rank = "さよなら好き";
      }
      if(RETRYCOUNT < 40){
        rank = "さよならの達人";
      }
      if(RETRYCOUNT < 10){
        rank = "マッハさよなら";
      }
      if(RETRYCOUNT == 0){
        rank = "さよならの神様";
      }

      return rank;

    },

});
