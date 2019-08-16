(function () {
    const tagName = "p";
    const text = "Some random text";

    const btn = document.getElementById("creator");
    btn.addEventListener("click", buttonHandler, false);

    function buttonHandler() {
        const paragraphs = document.getElementsByTagName(tagName);

        if (paragraphs.length === 10) {
            while (paragraphs.length > 0) {
                document.body.removeChild(paragraphs[0]);
            }

            return;
        }

        const newParagraph = document.createElement("p");
        newParagraph.innerHTML = paragraphs.length + 1 + ". " + text;
        document.body.appendChild(newParagraph);
    }
})();