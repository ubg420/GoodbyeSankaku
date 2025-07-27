/*---------------------------------------------------------------

                        createbox(World,type,位置xy,幅,高さ)
                        ・box2dオブジェクトの作成
                        ・type = 0:静的オブジェクト　1:動的オブジェクト
                        　
-----------------------------------------------------------------*/
function createbox(world,type,x,y,width,height,angle){
    var boxFixDef,boxShape,boxBodyDef,b2body;

    //フィクスチャーの定義を生成
    boxFixDef = new b2FixtureDef();
    boxFixDef.density = 1;
    boxFixDef.friction = 0.5;
    boxFixDef.restitution = 0.5;



    //フィクスチャーの形
    boxShape = new b2PolygonShape();
    boxShape.SetAsBox(width, height);
    boxFixDef.shape = boxShape;

    //ボディを定義
    boxBodyDef = new b2BodyDef();
    boxBodyDef.position.Set(x, y);
    boxBodyDef.angle = angle;

    //動的か静的か
    if(type == 0){
        boxBodyDef.type = b2Body.b2_staticBody;
    }
    else{
        boxBodyDef.type = b2Body.b2_dynamicBody;
    }

    b2body = world.CreateBody( boxBodyDef );//ボディをworldに生成し…
    b2body.CreateFixture( boxFixDef );//フィクスチャーを追加する

    return b2body;
}


function createsankaku(world,type,x,y,width,height,angle){
    var boxFixDef,boxShape,boxBodyDef,b2body;

    //フィクスチャーの定義を生成
    boxFixDef = new b2FixtureDef();
    boxFixDef.density = 1;
    boxFixDef.friction = 0.1;
    boxFixDef.restitution = 0.5;



    //フィクスチャーの形
    boxShape = new b2PolygonShape();

    var entity1 = [{x: 1, y: 0}, {x: -0.5, y: 0.866}, {x: -0.5, y:-0.866}]
    var entity= [ {x: 0.866, y: 0.5},{x: -0.866, y:0.5}, {x: 0, y: -1}]

    var points = [];

    for (var i = 0; i < entity.length; i++) {
        var vec = new b2Vec2();
        vec.Set(entity[i].x, entity[i].y);
        points[i] = vec;
    }

    boxShape.SetAsArray(points, points.length);
    boxFixDef.shape = boxShape;


    //ボディを定義
    boxBodyDef = new b2BodyDef();
    boxBodyDef.position.Set(x, y);
    boxBodyDef.angle = angle;

    //動的か静的か
    if(type == 0){
        boxBodyDef.type = b2Body.b2_staticBody;
    }
    else{
        boxBodyDef.type = b2Body.b2_dynamicBody;
    }

    b2body = world.CreateBody( boxBodyDef );//ボディをworldに生成し…
    b2body.CreateFixture( boxFixDef );//フィクスチャーを追加する

    return b2body;
}




function createPushBox(world,type,x,y,width,height,angle){
    var boxFixDef,boxShape,boxBodyDef,b2body;

    //フィクスチャーの定義を生成
    boxFixDef = new b2FixtureDef();
    boxFixDef.density = 10;
    boxFixDef.friction = 1;
    boxFixDef.restitution = 0;
  //  boxFixDef.gravityScale =0;

    //フィクスチャーの形
    boxShape = new b2PolygonShape();
    boxShape.SetAsBox(width, height);
    boxFixDef.shape = boxShape;

    //ボディを定義
    boxBodyDef = new b2BodyDef();
    boxBodyDef.position.Set(x, y);
    boxBodyDef.angle = angle;

    //ボディを定義
    boxBodyDef = new b2BodyDef();
    boxBodyDef.position.Set(x, y);
    boxBodyDef.angle = angle;

    boxBodyDef.type = b2Body.b2_dynamicBody;

    b2body = world.CreateBody( boxBodyDef );//ボディをworldに生成し…
    b2body.CreateFixture( boxFixDef );//フィクスチャーを追加する




    return b2body;
}


function createJoint(world,b2body,vx,vy,length){

      // 直動ジョイント
      var worldAxis = new b2Vec2(vx, vy);
      var prismaticJointDef = new b2PrismaticJointDef();
      prismaticJointDef.Initialize(world.GetGroundBody(), b2body, b2body.GetWorldCenter(), worldAxis);
      prismaticJointDef.lowerTranslation = 0.0;
      prismaticJointDef.upperTranslation = length;
      prismaticJointDef.enableLimit = true;
      prismaticJointDef.maxMotorForce = 20;
      prismaticJointDef.motorSpeed = 5;
      prismaticJointDef.enableMotor = false;
      var prismaticJoint = world.CreateJoint(prismaticJointDef);

      return prismaticJoint;

}
