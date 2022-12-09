

var myHtml = document.querySelector('html');
var myImage = document.querySelector('img');


myHtml.onwheel= function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cartoon-1.png') {
        myImage.setAttribute ('src', 'images/cartoon-2.png')
    } else {
        myImage.setAttribute ('src', 'images/cartoon-1.png')
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Zdarova, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Zdarova, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}