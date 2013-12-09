define([
    'game'
], function (game) {
    var singleton = function () {
        var player;

        var update = function() {
            player.rotation += 0.1;
        }

        var init = function() {
            // create a texture from an image path
            var texture = PIXI.Texture.fromImage("assets/entities/bunny.png");
            // create a new Sprite using the texture
            player = new PIXI.Sprite(texture);

            // center the sprites anchor point
            player.anchor.x = 0.5;
            player.anchor.y = 0.5;

            // move the sprite t the center of the screen
            player.position.x = 200;
            player.position.y = 150;

            game.stage.addChild(player);

            // Add callback to update in main render loop
            game.updateList.push(update);
        }

        return {
            init: init
        };
    };

    return singleton();
});
