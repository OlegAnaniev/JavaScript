const finder = {};
finder.byClass = function (value) {
    const elements =  document.getElementsByClassName(value);
    const result = new Array();

    for (let i = 0; i < elements.length; i++) {
        result.push(elements[i]);
    }

    return result;
};