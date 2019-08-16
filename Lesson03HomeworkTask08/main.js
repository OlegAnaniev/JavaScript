(function () {
    window.addEventListener("keydown", handler);

    function handler(e) {
        const pressedKey = e.key ? e.key : e.keyCode;

        if (pressedKey === "s" || pressedKey === "S" || pressedKey === 115) {
            if (e.ctrlKey && e.shiftKey) {
                setText("сохранено все");
            } else if (e.ctrlKey) {
                setText("сохранено");
            }

            return;
        }
        
        if ((pressedKey === "a" || pressedKey === 97) && e.ctrlKey) {
            setText("выбрано все");
            return;
        }

        setText("");
    }

    function setText(text) {
        const displays = document.getElementsByClassName("display");

        for (let i = 0; i < displays.length; i++) {
            displays[i].innerHTML = text;
        }
    }
})();