/// <reference path="_references.ts"/>
// IIFE - Immediately Invoked Function Expression
(function () {
    // Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    var clickMeButton;
    function Init() {
        console.log("Initialization Started...");
        Start();
    }
    function Start() {
        console.log("Starting Application...");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); //turn this on for buttons
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        // helloLabel.rotation -= 5;
        stage.update(); // redraws the stage
    }
    function clickMeButtonMouseClick() {
        helloLabel.text = "Clicked!";
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    }
    function Main() {
        console.log("Game Started...");
        helloLabel = new objects.Label("Hello, World!", "40px", "Consolas", "#000000", 320, 230, true);
        stage.addChild(helloLabel);
        clickMeButton = new objects.Button("./Assets/images/clickMeButton.png", 320, 340);
        clickMeButton.regX = clickMeButton.getBounds().width * 0.5;
        clickMeButton.regX = clickMeButton.getBounds().height * 0.5;
        stage.addChild(clickMeButton);
        clickMeButton.on("click", clickMeButtonMouseClick);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map