var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mary-ann1.jpg') {
      myImage.setAttribute ('src','images/mary-ann2.jpg');
    } else {
      myImage.setAttribute ('src','images/mary-ann1.jpg');
    }
}
//����������� ������������
//var myButton = document.querySelector('button');
//var myHeading = document.querySelector('h1');
//function setUserName() {
 // var myName = prompt('����������, ������� ���� ���.');
  //localStorage.setItem('name', myName);
 // myHeading.textContent = '������, ' + myName;
//}
//if(!localStorage.getItem('name')) {
  //setUserName();
//} else {
  //var storedName = localStorage.getItem('name');
  //myHeading.textContent = '������, ' + storedName;
//}
//myButton.onclick = function() {
  //setUserName();
//}