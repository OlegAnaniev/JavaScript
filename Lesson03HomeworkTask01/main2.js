(function () {
    function setText (tag, text) {
        const paragraphs = document.getElementsByTagName(tag);

        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].innerHTML = text;
        }
    }

    setText("p", "PARAGRAPH");
})();