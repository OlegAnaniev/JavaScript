(function () {
    window.addEventListener("keydown", movementHandler);

    function movementHandler(e) {
        const movables = document.getElementsByClassName("movable");
        const pressedKey = e.key ? e.key : e.keyCode;

        switch (pressedKey) {
            case "ArrowLeft":
            case 37:
                for (let i = 0; i < movables.length; i++) {
                    movables[i].style.left = getDecreasedValue(movables[i], "left");
                }
                break;
            case "ArrowRight":
            case 39:
                for (let i = 0; i < movables.length; i++) {
                    movables[i].style.left = getIncreasedValue(movables[i], "left");
                }
                break;
            case "ArrowUp":
            case 38:
                for (let i = 0; i < movables.length; i++) {
                    movables[i].style.top = getDecreasedValue(movables[i], "top");
                }
                break;
            case "ArrowDown":
            case 40:
                for (let i = 0; i < movables.length; i++) {
                    movables[i].style.top = getIncreasedValue(movables[i], "top");
                }
                break;
            default:
                break;
        }
    }

    function getDecreasedValue(movable, value) {
        let newValue = getPropertyValue(movable, value) - 10;
        newValue = newValue > 0 ? newValue : 0;

        return newValue + "px";
    }

    function getIncreasedValue(movable, value) {
        let newValue = getPropertyValue(movable, value) + 10;
        const sceneSize = getPropertyValue(movable.parentNode, getLimitingPropertyName(value));
        const movableSize = getPropertyValue(movable, getLimitingPropertyName(value));
        const maxValue = sceneSize - movableSize;
        newValue = newValue < maxValue ? newValue : maxValue;

        return newValue + "px";
    }

    function getPropertyValue(element, propertyName) {
        const size = window.getComputedStyle(element, null).getPropertyValue(propertyName);
        return +size.substring(0, size.length - 2);
    }

    function getLimitingPropertyName(movablePropertyName) {
        return movablePropertyName === "left" ? "width" : "height";
    }
})();