const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const divPurple = document.getElementById('purple-div');
const colors = document.getElementsByClassName('colors');
const redDiv = document.getElementById('red-div');
const blueDiv = document.getElementById('blue-div');
const greenDiv = document.getElementById('green-div');



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


    
















































    

