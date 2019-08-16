(function () {
    const buttons = document.getElementsByClassName("saver");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", saveHandler);
    }

    window.onbeforeunload = closeHandler;
    
    function saveHandler() {
        alert("Saved");
    }
    
    function closeHandler() {
        return "Are you sure?";
    }
})();