(function () {
    const radius = 10;
    const diameter = radius * 2;

    function clickListener(event) {
        const rect = this.getBoundingClientRect();

        const circle = document.createElement("div");
        circle.style.width = diameter + "px";
        circle.style.height = diameter + "px";
        circle.style.borderRadius = radius + "px";
        circle.style.left = event.clientX - rect.left - radius + "px";
        circle.style.top = event.clientY - rect.top - radius + "px";
        circle.className += "circle";

        this.appendChild(circle);
    }

    document.getElementById("area").addEventListener("click", clickListener);
})();