
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



var keyBox = document.getElementById("username");

function onchange(e){
    // получаем новое значение
    // var val = e.target.value;
    // установка значения
    console.log(keyBox.textContent)
}

function onblur(e){
     
    // получаем его значение и обрезаем все пробелы
    var text = keyBox.value.trim();
    if(text==="")
        keyBox.style.borderColor = "red";
    else
        keyBox.style.borderColor = "green";
    
}

function onfocus(e){
    // установка цвета границ поля
    keyBox.style.borderColor = "blue";
}

var val
var myHeading = document.querySelector('h1');

function setUserName(val) {
    localStorage.setItem('name', val);
    myHeading.textContent = 'Zdarova, ' + val;
}

if(!localStorage.getItem('name')) {
    
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Zdarova, ' + storedName;
}

function onkeydown(e)
{
    if (e.code === 'Enter') {
        val = keyBox.value;
        setUserName(val);
    }
}


keyBox.addEventListener("change", onchange);
keyBox.addEventListener("blur", onblur);
keyBox.addEventListener("focus", onfocus);
keyBox.addEventListener("keydown", onkeydown); 







