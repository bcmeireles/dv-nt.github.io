function scrollTitle(text) {
    document.title = text;
    setTimeout(function () {
        scrollTitle(text.substr(1) + text.substr(0, 1));
    }, 500);
}