phina.define("Sankaku", {
    superClass: "DisplayElement",
    init: function(X,Y) {
      this.superInit({
        width: 50,
        height: 50,
        fill: "green",
        stroke: null,

      });

        this.x = 200;
        this.y = 610;

        this.vx = 0;
        this.vy = 0;
        this.g  = 0;

        this.Scale = 30;

        //Box2d用パラメータ
        this.Box2d_x = 6;
        this.Box2d_y = -1;
        this.Box2d_width = 1;
        this.Box2d_height = 1;
        this.Box2d_type = 1;    //静的か動的か　0:静的　１：動的

        //Box2dオブジェクトを作成する
        this.SankakuBox = createsankaku(WORLD,this.Box2d_type,this.Box2d_x,this.Box2d_y,this.Box2d_width,this.Box2d_height,0);



        this.setBoundingType("rect");
        this.color = "#A4C520";
        this.ColisionFLG = false;

        //コリジョン
        this.colision = TriangleShape().addChildTo(this);
        this.colision.radius = WORLDSCALE;

        this.colision.alpha = 1; //コリジョン可視化 = 1
        this.colision.fill = "#5EC84E";
        this.colision.strokeWidth = 0;


        this.HitFLG = false;

        this.MoveMode = "Normal";

    },

    update: function(app) {

      this.x = this.SankakuBox.GetPosition().x * WORLDSCALE;
      this.y = this.SankakuBox.GetPosition().y * WORLDSCALE;
      this.rotation = this.SankakuBox.GetAngle() * 180 / Math.PI;


      if(this.y > SCREEN_HEIGHT){
        // ラベルを表示
        GameMain.Sayonara();
        this.remove();
        WORLD.DestroyBody(this.SankakuBox);

      }

    //	this.x = this.mx + GameMain.Player.x;
    //	this.y = this.my + GameMain.Player.y;

    },


    Destroy(){
        WORLD.DestroyBody(this.SankakuBox);
        this.remove();
    },


});
