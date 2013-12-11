define(function () {
    var singleton = function () {
        var keyMap = {};
        var keyState = {};

        // TODO: More keyCodes!
        keyMap[37] = "ARROW_LEFT";
        keyMap[38] = "ARROW_UP";
        keyMap[39] = "ARROW_RIGHT";
        keyMap[40] = "ARROW_DOWN";

        // A-Z
        for(var i = 65; i <= 90; i++) {
            keyMap[i] = String.fromCharCode(i);
        }

        var setKeyState = function(keyCode, state) {
            var key = keyMap[keyCode];
            keyState[key] = state;
        }

        document.addEventListener('keydown', function(event) {
            setKeyState(event.keyCode, true);
        });

        document.addEventListener('keyup', function(event) {
            setKeyState(event.keyCode, false);
        });

        return keyState;
    };

    return singleton();
});
