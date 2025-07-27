phina.define('MainScene', {
  superClass: 'DisplayScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });
    this.backgroundColor = '#FFF';

    GameMain = this;

    ObjectGroup = DisplayElement().addChildTo(this);
    PushBlockGroup = DisplayElement().addChildTo(this);
    BlockGroup = DisplayElement().addChildTo(this);

    this.BlockGroup = DisplayElement().addChildTo(this);


    this.sankaku = Sankaku().addChildTo(this);

    //x,y,width,height,Angele,vx,vy,length


    var self = this;


    this.reload = Sprite('reload').addChildTo(this);
    this.reload.setPosition(this.gridX.center(0),this.gridY.center(7));
    this.reload.setSize(80, 80);
    this.reload.setInteractive(true);

    this.reload.onpointstart = function(e){
      self.ReStart();
    }


    
    this.tweet = Sprite('tweetbutton').addChildTo(this);
    this.tweet.setPosition(this.gridX.center(-2.5),this.gridY.center(7));
    this.tweet.setSize(80, 80);
    this.tweet.setInteractive(true);


    
    var url = "http://cachacacha.com/GAME/GoodbyeSankaku/";
    this.ResultTxt = "";

    console.log(this.app);

    var self = this;


    this.tweet.onpointstart = function(e){

      var Tweettxt = encodeURIComponent("STAGE"+STAGECOUNT+" リトライ回数 " + RETRYCOUNT + "回 " +  " " + url + "  #さよなら三角 #かちゃコム");
      window.open("http://twitter.com/intent/tweet?text=" + Tweettxt);

    }





    this.timer = 0;


    //setup debug draw
    /*
    var debugDraw = new b2DebugDraw();
   debugDraw.SetSprite(document.getElementById("canvas").getContext("2d"));

   debugDraw.SetDrawScale(2.3);
   debugDraw.SetFillAlpha(0.3);
   debugDraw.SetLineThickness(1.0);
   debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
   WORLD.SetDebugDraw(debugDraw);
   */

  },

  update: function(app){
    //WORLD.DrawDebugData();

    var timeStep = 1 / 30;
    var velocityIterations = 1;
    var positionIterations = 1;
    WORLD.Step(timeStep,velocityIterations,positionIterations);
    WORLD.ClearForces(); // 物理世界上の力をリセットする

  },




  onpointend: function(){

    var og = PushBlockGroup.children;
    var self = this;
    og.each(function(Object) {
      //  if(clash(self,block)){
      Object.Back();
    });

  },

  onpointstart: function(){
    var og = PushBlockGroup.children;
    var self = this;
    og.each(function(Object) {
      //  if(clash(self,block)){
      Object.Push();
    });

  },

  GameOver: function(){
    var result = Result().addChildTo(this);
  },

  Retry: function(){
    this.exit("Main");
  },

  Sayonara:function(){

    this.sayonara = Label('さよなら').addChildTo(this);
    this.sayonara.fontFamily= 'Yu Mincho'
    this.sayonara.setPosition(this.gridX.center(0),this.gridY.center(-6));
    this.sayonara.fill = '#A4C520'; // 色を変更
    this.sayonara.strokeWidth = 8;
    this.sayonara.fontSize = 64; // フォントサイズを変更

    STAGECOUNT++;


    var og = PushBlockGroup.children;
    var self = this;
    og.each(function(Object) {
      WORLD.DestroyBody(Object.Boxbody);
    });

    var bg = BlockGroup.children;
    bg.each(function(Object) {
      WORLD.DestroyBody(Object.Boxbody);
    });


    //bg.clear();
    //og.clear();

    this.exit();

  },


  ReStart:function(){
    WORLD.DestroyBody(this.sankaku.SankakuBox);
    this.sankaku.remove();
    this.sankaku = Sankaku().addChildTo(this);
    RETRYCOUNT++;
  }

});
