const luxe         = document.getElementById("luxe");
const man          = document.getElementById("man");
const woman        = document.getElementById("woman");
const homeSection  = document.getElementById('home-section');
const luxeSection  = document.getElementById('luxe-section');
const manSection   = document.getElementById('man-section');
const womanSection = document.getElementById('woman-section');
const colors       = document.getElementsByClassName('colors');


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
    let checkboxId = checkboxElem.id;
    console.log(checkboxId);
    
    const checkboxName = checkboxElem.name;
    console.log(checkboxName);
    
    setCookie(checkboxName, checkboxId, 7)
};
    

let cookieSaved = getCookie('checkfield');
console.log(cookieSaved)

    if (cookieSaved == 'luxe') {
        luxeSection.classList.remove('hide');

    } else if (cookieSaved == 'man') {

        manSection.classList.remove('hide');

    } else if (cookieSaved ==  'woman ') {
        womanSection.classList.remove('hide');
    } 



window.onload = function() {
    if(cookieSaved !== null){
        homeSection.classList.add('hide'); 
    }
      };    













































































const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Sep 30, 2019 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

    }, second)


    
























































