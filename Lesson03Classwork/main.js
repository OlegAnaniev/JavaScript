(function () {
    document.getElementById("b1").onclick = () => { setBorder("p", "red")};
    document.getElementById("b2").onclick = () => { setBorder("div", "green")};

    function setBorder(tag, color) {
        const elements = document.getElementsByTagName(tag);

        for (let i = 0; i < elements.length; i++) {
            if (elements[i].style.borderColor !== color) {
                elements[i].style.borderColor = color;
                elements[i].style.borderStyle = "solid";
                elements[i].style.borderWidth = "1px";
            } else {
                elements[i].style.borderColor = "";
                elements[i].style.borderStyle = "";
                elements[i].style.borderWidth = "";
            }
        }
    }
})();

