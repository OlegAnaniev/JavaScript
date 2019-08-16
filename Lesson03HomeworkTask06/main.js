(function () {
    window.addEventListener("keydown", handler);

    function handler(e) {
        const pressedKey = e.key ? e.key : e.keyCode;

        switch (pressedKey) {
            case "r":
            case 82:
                setColor("colorable", "red");
                break;
            case "g":
            case 71:
                setColor("colorable", "green");
                break;
            case "b":
            case 66:
                setColor("colorable", "blue");
                break;
            default:
                break;
        }
    }

    function setColor(className, color) {
        const elements = document.getElementsByClassName(className);

        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color = color;
        }
    }
})();