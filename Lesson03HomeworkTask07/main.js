(function () {
    const positions = {
      1 : { x : 20, y : 20},
      2 : { x : 80, y : 20},
      3 : { x : 80, y : 80},
      4 : { x : 20, y : 80},
    };
    let currentPosition = 1;

    const buttons = document.getElementsByClassName("unreachable");
    for (let i = 0; i < buttons.length; i ++) {
        buttons[i].addEventListener("mouseover", handler);
        buttons[i].addEventListener("click", click);
    }

    function handler(e) {
        if (currentPosition < 4) {
            currentPosition++;
        } else {
            currentPosition = 1;
        }

        e.target.style.left = positions[currentPosition].x + "vw";
        e.target.style.top = positions[currentPosition].y + "vh";
    }

    function click() {
        alert("You have got a discount!");
    }
})();