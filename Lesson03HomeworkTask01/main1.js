const namespace = {};
namespace.setText = function (tag, text) {
    const paragraphs = document.getElementsByTagName(tag);

    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerHTML = text;
    }
};

namespace.setText("p", "PARAGRAPH");