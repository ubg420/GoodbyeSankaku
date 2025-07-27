phina.define("Block", {
    superClass: "DisplayElement",
    init: function(X,Y,WIDITH,HEIGHT,ANGLE) {
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


        //Box2d用パラメータ
        this.Box2d_x = X;
        this.Box2d_y = Y;
        this.Box2d_width = WIDITH;
        this.Box2d_height = HEIGHT;
        this.Box2d_angle = ANGLE;
        this.Box2d_type = 0;    //静的か動的か　0:静的　１：動的

        //Box2dオブジェクトを作成する
        this.Boxbody = createbox(WORLD,this.Box2d_type,this.Box2d_x,this.Box2d_y,this.Box2d_width,this.Box2d_height,ANGLE);
        this.Boxbody.SetLinearVelocity(new b2Vec2(1,3));

        this.setBoundingType("rect");
        this.ColisionFLG = false;

        //コリジョン
        this.colision = RectangleShape().addChildTo(this);
        this.colision.width = this.Box2d_width  * (WORLDSCALE * 2);
        this.colision.height = this.Box2d_height  * (WORLDSCALE * 2);
        this.colision.alpha = 1; //コリジョン可視化 = 1
        this.colision.strokeWidth = 0;
        this.colision.fill = "#A4A9CF";



        this.HitFLG = false;

        this.MoveMode = "Normal";

    },

    update: function(app) {

      this.x = this.Boxbody.GetPosition().x * WORLDSCALE;
      this.y = this.Boxbody.GetPosition().y * WORLDSCALE;
      this.rotation = this.Boxbody.GetAngle() * 180 / Math.PI;

    //	this.x = this.mx + GameMain.Player.x;
    //	this.y = this.my + GameMain.Player.y;

    },

    DestroyMe(){
        WORLD.DestroyBody(this.Boxbody);
        this.remove();

    },

});
