define(['input'], function (Input) {
    var singleton = function () {
        var player;
        var movementSpeed = 5;

        var update = function() {
            handleMovement();
        }

        var init = function(stage, updateList) {
            console.log(Input);
            var texture = PIXI.Texture.fromImage("assets/entities/bunny.png");
            player = new PIXI.Sprite(texture);

            player.anchor.x = 0.5;
            player.anchor.y = 0.5;

            player.position.x = 1280/2;
            player.position.y = 720/2;

            stage.addChild(player);

            // Add callback to update in main render loop
            updateList.push(update);
        }

        var handleMovement = function() {
            // TODO: Delta values!
            if (Input.A || Input.ARROW_LEFT) {
                player.position.x -= movementSpeed;
            } else if (Input.D || Input.ARROW_RIGHT) {
                player.position.x += movementSpeed;
            }

            if (Input.W || Input.ARROW_UP) {
                player.position.y -= movementSpeed;
            } else if (Input.S || Input.ARROW_DOWN) {
                player.position.y += movementSpeed;
            }
        }

        return {
            init: init
        };
    };

    return singleton();
});
