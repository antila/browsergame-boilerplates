define([
    'pixi',
    'entities/player',
], function (PIXI, player) {
    var singleton = function () {
        var updateList = [];
        var stage = stage = new PIXI.Stage(0x66FF99);
        var renderer = PIXI.autoDetectRenderer(1280, 720);
        document.body.appendChild(renderer.view);

        var animate = function() {
            requestAnimFrame(animate);

            // Call everything in updateList
            for (var i = updateList.length - 1; i >= 0; i--) {
                updateList[i]();
            };

            renderer.render(stage);
        }

        var init = function() {
            // Init everything
            player.init(stage, updateList);

            requestAnimFrame(animate);
        }

        return {
            init: init,
            stage: stage,
            updateList: updateList
        };
    };
    return singleton();
});
