define([
    'game',
    'entities/player',
], function (game, player) {
    var singleton = function () {
        var init = function() {
            // Init everything
            player.init();

            // Start rendering
            game.init();
        }

        return {
            init: init,
        };
    };
    return singleton();
});
