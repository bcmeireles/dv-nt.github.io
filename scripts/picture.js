function loadPic() {
    var pictures = ['gifs/bike.gif', 'gifs/clouds.gif'];
    var picture = pictures[Math.floor(Math.random() * pictures.length)];
    document.write('<img src="' + picture + '" width="450px" height="400px" />');
}