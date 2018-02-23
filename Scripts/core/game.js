/// <reference path="_references.ts"/>
// IIFE - Immediately Invoked Function Expression
(function () {
    // Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    var clickMeButton;
    var assetManager;
    var assetManifest;
    assetManifest = [{ id: "clickMeButton", src: "./Assets/images/clickMeButton.png" }];
    // preloads assets
    function Init() {
        console.log("Initialization Started...");
        assetManager = new createjs.LoadQueue(); // creates the asset manager object
        assetManager.installPlugin(createjs.Sound); // asset manager can also load sounds
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting Application...");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); //turn this on for buttons
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        objects.Game.currentScene = config.Scene.START;
        Main();
    }
    function Update() {
        stage.update(); // redraws the stage
    }
    function Main() {
        switch (objects.Game.currentScene) {
            case config.Scene.START:
                break;
            case config.Scene.PLAY:
        }
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map