phina.globalize();

var SCREEN_WIDTH    = 920;
var SCREEN_HEIGHT   = 1280;

var gravity = new b2Vec2(0, 20);
var WORLD = new b2World(gravity, true);
var WORLDSCALE = 20;

var Group;
var ObjectGroup;


var GameMain;
var RETRYCOUNT = 0;

var BlockGroup;
var PushBlockGroup;

var STAGECOUNT = 0;

var ASSETS = {
  image: {



    'Logo':'img/logo.png',
    'Retry':'img/Retry.png',
    'Tweet':'img/Tweet.png',
    'reload':'img/reload.png',
    'arrow':'img/arrow021.png',
    'tweetbutton':'img/Twitter.png',

  },
  spritesheet: {
    'PlayerSS': 'spriteSS/PlayerSS.ss',
    'DogSS': 'spriteSS/DogSS.ss',
    'RikuzyoSS': 'spriteSS/RikuzyoSS.ss',
  },
  sound: {

  },
};

phina.main(function() {
  var app = GameApp({
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    assets: ASSETS,
  });
  app.replaceScene(SceneSequence());
  app.run();
});

// SceneSequenceクラス
phina.define("SceneSequence", {
  superClass: "phina.game.ManagerScene",

  // 初期化
  init: function() {
    this.superInit({
      scenes: [

        {
          label: "Loading", // ラベル。参照用
          className: "LoadingScene", // シーンAのクラス名
          nextLabel:"Title",
        },

        {
          label: "Title", // ラベル。参照用
          className: "TitleScene", // シーンAのクラス名
          nextLabel:"Stage1",
        },

        {
          label: "Main",
          className: "MainScene",
        },

        {
          label: "Stage1",
          className: "Stage1",
          nextLabel:"Stage2",

        },

        {
          label: "Stage2",
          className: "Stage2",
          nextLabel:"Stage3",

        },

        {
          label: "Stage3",
          className: "Stage3",
          nextLabel:"Stage4",

        },

        {
          label: "Stage4",
          className: "Stage4",
          nextLabel:"Stage5",

        },

        {
          label: "Stage5",
          className: "Stage5",
          nextLabel:"Stage6",

        },

        {
          label: "Stage6",
          className: "Stage6",
          nextLabel:"Stage7",

        },

        {
          label: "Stage7",
          className: "Stage7",
          nextLabel:"Stage8",

        },

        {
          label: "Stage8",
          className: "Stage8",
          nextLabel:"Stage9",

        },

        {
          label: "Stage9",
          className: "Stage9",
          nextLabel:"Stage10",

        },

        {
          label: "Stage10",
          className: "Stage10",
          nextLabel:"Stage11",

        },

        {
          label: "Stage10",
          className: "Stage10",
          nextLabel:"Stage11",

        },

        {
          label: "Stage11",
          className: "Stage11",
          nextLabel:"Stage12",

        },

        {
          label: "Stage12",
          className: "Stage12",
          nextLabel:"Stage13",

        },

        {
          label: "Stage13",
          className: "Stage13",
          nextLabel:"End",

        },

        {
          label: "Stage14",
          className: "Stage14",
          nextLabel:"Stage15",

        },

        {
          label: "Stage15",
          className: "Stage15",
          nextLabel:"Result",

        },



        {
          label: "End",
          className: "EndScene",
        }

      ]
    });
  }
});

phina.define("LoadingScene", {
  superClass: "phina.game.LoadingScene",

  init: function(params) {
    this.superInit({
      assets: ASSETS,
      exitType: "auto",

    });

  }

});

phina.define('ResultScene', {
  superClass: 'DisplayScene',

  init: function() {
    this.superInit();
  },
});
