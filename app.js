const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const divPurple = document.getElementById('purple-div');
const colors = document.getElementsByClassName('colors');
const redDiv = document.getElementById('red-div');
const blueDiv = document.getElementById('blue-div');
const greenDiv = document.getElementById('green-div');


function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
   
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    setCookie(name, "", -1);
}



function doalert(checkboxElem) {
    // divPurple.classList.add('hide');
    let checkboxId = checkboxElem.id;
    const checkboxName = checkboxElem.name;
    setCookie(checkboxName, checkboxId, 1)
}

let cookieSaved = getCookie('checkfield');
console.log(cookieSaved)

    if (cookieSaved == 'red') {
        redDiv.classList.remove('hide');

    } else if (cookieSaved == 'blue') {

        blueDiv.classList.remove('hide');

    } else if (cookieSaved ==  'green') {
        greenDiv.classList.remove('hide');
    } 



window.onload = function() {
    if(cookieSaved !== null){
        divPurple.classList.add('hide'); 
    }
      };    

