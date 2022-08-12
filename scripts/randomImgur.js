function randomImgur() {
  var chars = '01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz';
  var text = '';

  for (var i = 0; i < 5; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    text += chars.substring(rnum,rnum+1);
  }
    
  var source = 'https://i.imgur.com/' + text + '.jpg';
  
  var image = new Image();
    image.onload = function() {
      if (this.width == 161) {
        randomImgur();
      } else {
        $('.stuff img').replaceWith(this);
        $('.stuff img').attr('href', source);
      }
    };
    image.src = source;
}

$(document).ready(function() { 
    randomImgur();
});


      function changeImage() {
      
      var source = '../gifs/bike.gif';
      
          var image = document.getElementById('image');
          if (image.src.match("../gifs/bike.gif")) {
              image.src = "../gifs/clouds.gif";
          }
          else {
              image.src = "../gifs/clouds.gif";
          }
      }