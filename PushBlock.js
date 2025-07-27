phina.define("PushBlock", {
    superClass: "DisplayElement",
    init: function(X,Y,WIDITH,HEIGHT,ANGLE,VX,VY,LENGE) {
      this.superInit({
        width: 50,
        height: 50,
        fill: "green",
        stroke: null,

      });

        this.x = 200;
        this.y = 610;

        this.vx = VX;
        this.vy = VY;
        this.g  = 0;

        this.PushPower = 20;

        //Box2d用パラメータ
        this.Box2d_x = X;
        this.Box2d_y = Y;
        this.Box2d_width = WIDITH;
        this.Box2d_height = HEIGHT;
        this.Box2d_angle = ANGLE;
        this.Box2d_type = 0;    //静的か動的か　0:静的　１：動的







        //Box2dオブジェクトを作成する
        this.Boxbody = createPushBox(WORLD,this.Box2d_type,this.Box2d_x,this.Box2d_y,this.Box2d_width,this.Box2d_height,ANGLE);
        this.joint = createJoint(WORLD,this.Boxbody,this.vx,this.vy,LENGE);

        //this.createPushBox(WORLD,);


        this.setBoundingType("rect");
        this.ColisionFLG = false;

        //コリジョン
        this.colision = RectangleShape().addChildTo(this);
        this.colision.width = this.Box2d_width  * (WORLDSCALE * 2);
        this.colision.height = this.Box2d_height  * (WORLDSCALE * 2);
        this.colision.alpha = 1; //コリジョン可視化 = 1
        this.colision.strokeWidth = 0;
        this.colision.fill = '#F0BA32';

        if(VY == -1){
          this.colision.fill = '#DB7BB1';
        }

        if(VX == -1){
          this.colision.fill = '#6BBED5';
        }




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


    Push(){
     this.Boxbody.ApplyForce(new b2Vec2(this.vx,this.vy),  this.Boxbody.GetWorldCenter());
     this.Boxbody.SetLinearVelocity(new b2Vec2(this.vx * this.PushPower,this.vy * (this.PushPower * 1.3)));
  //   this.Boxbody.ApplyForce(new b2Vec2(this.vx * 50000,this.vy * 1000000000),  this.Boxbody.GetWorldCenter());
    },

    Back(){
//      this.SankakuBox.SetLinearVelocity(new b2Vec2(-114,0));
    //this.Boxbody.ApplyForce(new b2Vec2(this.vx * -50000,this.vy * -1000000000),  this.Boxbody.GetWorldCenter());
      this.Boxbody.ApplyForce(new b2Vec2(-this.vx,-this.vy),  this.Boxbody.GetWorldCenter());
      this.Boxbody.SetLinearVelocity(new b2Vec2(this.vx * -this.PushPower,this.vy * -(this.PushPower * 1.3)));

    },

    DestroyMe(){
        WORLD.DestroyBody(this.Boxbody);
        this.remove();

    },




});
