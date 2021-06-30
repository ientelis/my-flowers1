var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/elina1.jpg') {
      myImage.setAttribute ('src','images/elina2.jpg');
    } else {
      myImage.setAttribute ('src','images/elina1.jpg');
    }
}